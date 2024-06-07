
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Albums from "@/components/Albums/Albums";

const queryClient = new QueryClient();
export default function Home() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <Albums/>
        </QueryClientProvider>
      </>
  )
}