import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function Home(): void {
  const rootElement = document.getElementById("root");

  const root = createRoot(rootElement!);
  root.render(
    <StrictMode>
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
    </StrictMode>
  );
}

Home();
