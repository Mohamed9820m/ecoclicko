import AuthProvider from "./AuthProvider.jsx";
import Routes from "./Routes.jsx";

function All() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default All;