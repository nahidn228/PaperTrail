/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { toast } from "sonner";
import { useChangePasswordMutation } from "@/redux/API/authApi";


export function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //  const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);

  const navigate = useNavigate();
  const [changePass] = useChangePasswordMutation();

  const passwordForm = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing Pass...");

    const passInfo = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    console.log(passInfo);

    const newPassword = data.newPassword;
    const confirmPassword = data.confirmPassword;

    if (newPassword !== confirmPassword) {
      toast.error("Password Not Matched", { id: toastId });
      return;
    }

    try {
      const result = await changePass(passInfo).unwrap();

      if (result.success)
        toast.success("Password Changed successfully", { id: toastId });
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 ">
          <Form {...passwordForm}>
            <form
              className="p-6 md:p-8"
              onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Change Your Password</h1>
                </div>

                {/* oldPassword */}
                <FormField
                  control={passwordForm.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Old Password</Label>
                      <FormControl>
                        <Input
                          placeholder="*****"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* new Password */}
                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label>New Password</Label>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="*****"
                            {...field}
                            value={field.value || ""}
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* confirmPassword */}
                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Confirm Password</Label>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="***"
                            {...field}
                            value={field.value || ""}
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Update Password
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}