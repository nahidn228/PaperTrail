/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";


import { useUserInfoQuery } from "@/redux/API/authApi";
import { ChangePassword } from "@/components/modules/ChangePassword";
import { useUpdateUserInfoMutation } from "@/redux/API/userApi";
import { Loader } from "@/components/Loader";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [updateUser, { isLoading: updateLoading }] =
    useUpdateUserInfoMutation();
  const userInfo = data?.data;

  console.log(userInfo);
  const form = useForm({
    defaultValues: {
      name: userInfo?.name || "",
      email: userInfo?.email || "",
      phone: userInfo?.phone || "",
      role: userInfo?.role,
      address: userInfo?.address || "",
      profilePicture: userInfo?.profilePicture || "",
      dateOfBirth: userInfo?.dateOfBirth || "",
      nid: userInfo?.nid || "",
    },
  });

  const email = userInfo?.email;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Updating profile...");

    try {
      const result = await updateUser({ email, ...data }).unwrap();
      console.log(result);

      if (result.success)
        toast.success("Profile updated successfully", { id: toastId });
      setActiveTab("profile");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Update failed", { id: toastId });
    }
  };

  useEffect(() => {
    if (userInfo) {
      form.reset({
        name: userInfo?.name || "",
        email: userInfo?.email || "",
        address: userInfo?.address || "",
        phone: userInfo?.phone || "",
        role: userInfo?.role || "User",
        dateOfBirth: userInfo?.dateOfBirth
          ? new Date(userInfo.dateOfBirth).toISOString().split("T")[0]
          : "",
        nid: userInfo?.nid || "",
      });
    }
  }, [form, userInfo]);

  if (isLoading) {
    return <Loader />;
  }
  if (updateLoading) {
    return <Loader />;
  }

  // Handle cancel editing
  const handleCancel = () => {
    if (userInfo) {
      form.reset({
        name: userInfo.name || "",
        email: userInfo.email || "",
        phone: userInfo.phone || "",
        role: userInfo.role || "User",
        profilePicture: userInfo.profilePicture || "",
        nid: userInfo.nid || "",
        address: userInfo.address || "",
        dateOfBirth: userInfo.dateOfBirth
          ? new Date(userInfo.dateOfBirth).toISOString().split("T")[0]
          : "",
      });
    }
    setIsEditing(false);
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="mt-2">Manage your account settings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 ">
            <TabsTrigger value="profile">Profile Information</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information
                    </CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "secondary" : "default"}
                    onClick={() =>
                      isEditing ? handleCancel() : setIsEditing(true)
                    }
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="h-34 w-34 border border-primary">
                          <AvatarImage
                            src={form.watch("profilePicture")}
                            alt={form.watch("name")}
                          />
                          <AvatarFallback>
                            {getInitials(form.watch("name") || "")}
                          </AvatarFallback>
                        </Avatar>
                        {isEditing && (
                          <FormField
                            control={form.control}
                            name="profilePicture"
                            render={({ field }) => (
                              <FormItem className="mt-4">
                                <FormLabel>Profile Picture URL</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter image URL"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                      </div>

                      <div className="flex-grow space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input disabled={!isEditing} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    disabled={true} // Email should not be editable
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input disabled={!isEditing} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Role</FormLabel>
                                <Select
                                  disabled={true}
                                  onValueChange={field.onChange}
                                  value={userInfo?.role}
                                >
                                  <FormControl>
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="User">User</SelectItem>
                                    <SelectItem value="Agent">Agent</SelectItem>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input disabled={!isEditing} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    disabled={!isEditing}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="nid"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>National ID</FormLabel>
                                <FormControl>
                                  <Input disabled={!isEditing} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {isEditing && (
                          <div className="pt-4">
                            <Button type="submit">Save Changes</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>
                  Change your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 w-full max-w-xl mx-auto">
                <ChangePassword />

                {/* <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div> */}
                {/* <Button>Update Password</Button> */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
