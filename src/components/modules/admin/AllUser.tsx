import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronFirst, ChevronLast, InspectIcon, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import {
  useGetAllUserQuery,
  useUpdateUserStatusMutation,
} from "@/redux/API/userApi";
import { Loader } from "@/components/Loader";

interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const AllUser = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleClear = () => {
    setSearchQuery("");
    setFilterType("");
  };

  const limit = 2;

  const { data, refetch, isLoading } = useGetAllUserQuery({
    page,
    limit,
    role: filterType === "all" ? null : filterType,
    type: filterType || undefined,
    search: searchQuery || undefined,
  });

  const [updateUserStatus] = useUpdateUserStatusMutation();

  const users = data?.data?.users;
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  const handleStatusChange = async (userId: string, payload: boolean) => {
    const toastId = toast.loading("Updating User Status...");

    console.log({ userId, payload });

    console.log(payload);

    try {
      const res = await updateUserStatus({
        userId,
        isActive: payload,
      }).unwrap();

      console.log(res);

      if (res.success) {
        toast.success("User Status Updated Successfully", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("User Status Not Updated. Something went wrong ", {
        id: toastId,
      });
    } finally {
      refetch();
    }
  };

  // Refetch on filters change
  useEffect(() => {
    setPage(1);

    refetch();
  }, [filterType, refetch, searchQuery]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold  lg:text-4xl">
            All <span className="text-primary">PaperTrail </span> Members
          </h2>
        </div>
        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-col md:flex-row">
          <Input
            value={searchQuery}
            placeholder="Search by ID, type, status, or email"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="User">User</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleClear}>Clear</Button>
        </div>

        {/* Table */}
        <div className="bg-background overflow-hidden rounded-md border min-h-80">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Verified Status</TableHead>
                <TableHead>Active Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user: IUser) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.isVerified ? "Verified" : "Not Verified"}
                  </TableCell>
                  <TableCell>
                    {/* {user.isActive ? "Active" : "Inactive"} */}

                    <Select>
                      <SelectTrigger className="w-44">
                        <SelectValue
                          placeholder={user.isActive ? "Active" : "Block"}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={"true"}>Active</SelectItem>
                        <SelectItem value={"false"}>Block</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className=" flex gap-2">
                      {/* <Button variant="outline" size="icon">
                      <InspectIcon />
                    </Button> */}

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <InspectIcon />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action can be undone. This will update user
                              account.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                handleStatusChange(user?._id, !user?.isActive)
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Button variant="destructive" size="icon">
                        <Trash2 />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-2 mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronFirst /> Prev
          </Button>
          <span>
            Page {page} of {totalPages || 1}
          </span>
          <Button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next <ChevronLast />
          </Button>
        </div> */}

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          {/* Page Info */}
          <p className="text-sm text-muted-foreground">
            Showing page {page} of {totalPages || 1}
          </p>

          {/* Pagination Controls */}
          <div className="flex gap-2">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronFirst className="w-4 h-4 mr-1" />
              Prev
            </Button>

            {/* Page Numbers (dynamic) */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <Button
                key={num}
                variant={num === page ? "default" : "outline"}
                size="sm"
                onClick={() => setPage(num)}
              >
                {num}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
              <ChevronLast className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUser;
