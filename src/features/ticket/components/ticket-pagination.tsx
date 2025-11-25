"use client";

import { useQueryStates } from "nuqs";
import Pagination from "@/features/ticket/components/Pagination";
import {
  paginationOptions,
  paginationParser,
} from "@/features/ticket/search-params";

const TicketPagination = () => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions,
  );

  return <Pagination pagination={pagination} onPagination={setPagination} />;
};

export default TicketPagination;
