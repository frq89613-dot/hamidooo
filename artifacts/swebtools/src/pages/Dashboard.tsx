import type { ComponentType } from "react";
import { Link, useLocation } from "wouter";
import {
  AlertCircle,
  ArrowLeft,
  DollarSign,
  LogOut,
  Package,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

import { useOrders } from "@/hooks/useOrders";
import { useAuth } from "@/providers/AuthProvider";
import { isSupabaseConfigured } from "@/lib/supabase";
import type { Order, OrderStatus } from "@/types/order";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function formatCurrency(amount: number | null): string {
  if (amount == null || Number.isNaN(amount)) return "—";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function formatDate(value: string | null): string {
  if (!value) return "—";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function statusVariant(
  status: OrderStatus | null,
): "default" | "secondary" | "destructive" | "outline" {
  const normalized = status?.toLowerCase() ?? "";
  if (normalized === "completed" || normalized === "paid") return "default";
  if (normalized === "cancelled" || normalized === "canceled")
    return "destructive";
  if (normalized === "processing") return "secondary";
  return "outline";
}

function computeStats(orders: Order[]) {
  const total = orders.length;
  const revenue = orders.reduce((sum, o) => sum + (o.amount ?? 0), 0);
  const pending = orders.filter((o) => {
    const s = o.status?.toLowerCase() ?? "";
    return s === "pending" || s === "processing";
  }).length;

  return { total, revenue, pending };
}

function OrderStatusBadge({ status }: { status: OrderStatus | null }) {
  const label = status ?? "unknown";
  return (
    <Badge variant={statusVariant(status)} className="capitalize">
      {label}
    </Badge>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  loading,
}: {
  title: string;
  value: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  loading?: boolean;
}) {
  return (
    <Card className="border-border/80 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-24 mb-2" />
        ) : (
          <div className="text-2xl font-bold font-mono tracking-tight">
            {value}
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}

function OrderRow({ order }: { order: Order }) {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs text-muted-foreground max-w-[120px] truncate">
        {order.id.slice(0, 8)}…
      </TableCell>
      <TableCell>
        <div className="font-medium">{order.customer_name ?? "—"}</div>
        {order.customer_email && (
          <div className="text-xs text-muted-foreground truncate max-w-[200px]">
            {order.customer_email}
          </div>
        )}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {order.product ?? "—"}
      </TableCell>
      <TableCell className="font-mono">{formatCurrency(order.amount)}</TableCell>
      <TableCell>
        <OrderStatusBadge status={order.status} />
      </TableCell>
      <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">
        {formatDate(order.created_at)}
      </TableCell>
    </TableRow>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <Card className="border-border/80 bg-card/60 backdrop-blur-md">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-medium">{order.customer_name ?? "—"}</p>
            {order.customer_email && (
              <p className="text-xs text-muted-foreground">
                {order.customer_email}
              </p>
            )}
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span className="text-muted-foreground">
            Product:{" "}
            <span className="text-foreground">{order.product ?? "—"}</span>
          </span>
          <span className="text-muted-foreground">
            Amount:{" "}
            <span className="font-mono text-foreground">
              {formatCurrency(order.amount)}
            </span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {formatDate(order.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, signOut } = useAuth();
  const configured = isSupabaseConfigured();
  const { data: orders = [], isLoading, isError, error, refetch, isFetching } =
    useOrders();

  const stats = computeStats(orders);
  const errorMessage =
    error instanceof Error ? error.message : "Failed to load orders.";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Orders <span className="text-primary">Dashboard</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                {user?.email
                  ? `Signed in as ${user.email}`
                  : "Live data from your Supabase orders table"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => refetch()}
              disabled={!configured || isFetching}
            >
              <RefreshCw
                className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => signOut().then(() => setLocation("/login"))}
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 md:px-6 md:py-10 space-y-8">
        {!configured && (
          <Alert className="border-primary/30 bg-card/60 backdrop-blur-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Supabase not configured</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>
                Paste your Supabase keys into{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  config/supabase.json
                </code>
                , then run:
              </p>
              <code className="block rounded bg-muted px-2 py-1 text-xs">
                pnpm setup:supabase
              </code>
              <p className="text-xs">
                The setup script creates the orders table, seeds sample data,
                and syncs keys for this dashboard automatically.
              </p>
            </AlertDescription>
          </Alert>
        )}

        {configured && isError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Could not load orders</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total orders"
            value={String(stats.total)}
            description="All records in the orders table"
            icon={ShoppingCart}
            loading={configured && isLoading}
          />
          <StatCard
            title="Revenue"
            value={formatCurrency(stats.revenue)}
            description="Sum of order amounts"
            icon={DollarSign}
            loading={configured && isLoading}
          />
          <StatCard
            title="In progress"
            value={String(stats.pending)}
            description="Pending or processing orders"
            icon={Package}
            loading={configured && isLoading}
          />
        </section>

        <Card className="border-border/80 bg-card/60 backdrop-blur-md overflow-hidden">
          <CardHeader>
            <CardTitle>Recent orders</CardTitle>
            <CardDescription>
              {configured
                ? "Newest orders first"
                : "Connect Supabase to load order data"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6 sm:pt-0">
            {configured && isLoading && (
              <div className="space-y-3 p-4 sm:p-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            )}

            {configured && !isLoading && !isError && orders.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-2 py-16 text-center text-muted-foreground">
                <Package className="h-10 w-10 opacity-40" />
                <p className="font-medium text-foreground">No orders yet</p>
                <p className="text-sm max-w-sm">
                  Insert rows into your Supabase{" "}
                  <code className="rounded bg-muted px-1">orders</code> table to
                  see them here.
                </p>
              </div>
            )}

            {configured && !isLoading && !isError && orders.length > 0 && (
              <>
                <div className="hidden md:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Product
                        </TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden lg:table-cell">
                          Created
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <OrderRow key={order.id} order={order} />
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col gap-3 p-4 md:hidden">
                  {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              </>
            )}

            {!configured && (
              <div className="py-12 text-center text-sm text-muted-foreground">
                Dashboard UI is ready — configure Supabase to fetch orders.
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
