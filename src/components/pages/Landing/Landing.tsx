import CardComponent from "@layouts/card-component";
import Header from "@layouts/header";

export const LandingPage = () => {
  return (
    <div className="p-6 h-full space-y-4">
      <Header isLandingPage="isLandingPage" />
      <CardComponent />
    </div>
  );
};
