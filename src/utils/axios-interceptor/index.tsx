/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react';
import Axios, { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { IAxiosConfig, IAxiosInterceptor, IErrorResponse } from './interfaces';
import Loader from './loader';
import store from 'store/store';

const process = import.meta.env;

export const setDefaultAxiosConfig: any = (
  baseURL?: string,
  headers?: any,
  timeout?: number,
) => {
  if (baseURL) Axios.defaults.baseURL = baseURL;
  if (headers) Axios.defaults.headers = headers;
  if (timeout) Axios.defaults.timeout = timeout;
};

const AxiosInterceptor: React.FunctionComponent<IAxiosInterceptor> = ({
  config,
  loaderComponent,
}) => {
  const { BASE_URL, HEADERS, TIMEOUT } = (config as IAxiosConfig) || {};
  const [loading, setLoader] = useState(false);
  const activeRequestsRef = useRef(0); // Use ref to track active requests

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    if (activeRequestsRef.current === 0) {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (BASE_URL ?? process?.VITE_BASE_URL) {
      setDefaultAxiosConfig(
        BASE_URL ?? process?.VITE_BASE_URL,
        HEADERS ?? process?.HEADERS,
        TIMEOUT ?? process?.TIMEOUT,
      );
    }
  }, [BASE_URL, HEADERS, TIMEOUT]);

  useEffect(() => {
    const requestInterceptor = Axios.interceptors.request.use((request) => {
      activeRequestsRef.current += 1; // Increment active requests count
      showLoader(); // Show loader when a request starts

      const loginData: any = store.getState().persistedSlice.userLoginData;
      const { userInfo } = loginData;
      const tempConfig = request;
      if (userInfo && userInfo?.token) {
        tempConfig.headers.Authorization = userInfo.token;
      }
      /* if (selectedCompanyParticipantId && !tempConfig.headers["X-COMPANY-PARTICIPANT-ID"]) {
        tempConfig.headers["X-COMPANY-PARTICIPANT-ID"] = selectedCompanyParticipantId;
      } */

      return request;
    });

    const responseInterceptor = Axios.interceptors.response.use(
      (response) => {
        activeRequestsRef.current -= 1; // Decrement active requests count
        hideLoader(); // Hide loader if no active requests
        return response;
      },
      async (error: AxiosError<IErrorResponse>) => {
        activeRequestsRef.current -= 1; // Decrement active requests count
        hideLoader(); // Hide loader if no active requests

        const message =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
          'Something went wrong.';
        if (Axios.isCancel(error)) {
          return Promise.reject(error);
        }
        toast.error(message);
        return Promise.reject(error);
      },
    );

    return () => {
      // Eject interceptors on component unmount
      Axios.interceptors.request.eject(requestInterceptor);
      Axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <>
      {loading && <>{loaderComponent ?? <Loader />}</>}
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={true}
        position="top-right"
        autoClose={500}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default React.memo(AxiosInterceptor);
