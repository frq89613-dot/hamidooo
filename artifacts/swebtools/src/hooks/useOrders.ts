import { useQuery } from "@tanstack/react-query";

import { fetchOrders, isSupabaseConfigured } from "@/lib/supabase";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    enabled: isSupabaseConfigured(),
    staleTime: 30_000,
  });
}
