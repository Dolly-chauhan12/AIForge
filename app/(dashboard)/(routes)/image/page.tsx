"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useProModal } from "@/hooks/use-pro-modal";
import Heading from "@/components/Heading";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import { Download, ImageIcon } from "lucide-react";
import { toast } from "sonner";

const Imagepage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [photos, setPhotos] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);

      setPhotos(urls);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong. Please try again");
      }
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Heading
        title="Image"
        icon={ImageIcon}
        description="Our most advanced text-to-image generation model"
        bgColor="bg-pink-500/10"
        iconColor="text-pink-500"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg
            border border-blue-400/40 w-full p-4 px-3 md:px-6
            focus-within:shadow-sm
            grid grid-cols-12 gap-2 "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-6">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 focus:outline-0 focus-visible:ring-0 focus-visible:ring-transparent focus-within:ring-0  bg-slate-200 dark:bg-gray-900"
                      placeholder="A white siamese cat"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2 ">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-slate-200 dark:bg-gray-900 border-blue-400/40">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-200 dark:bg-gray-900">
                      {amountOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-slate-200 dark:bg-gray-900 border-blue-400/40">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-200 dark:bg-gray-900">
                      {resolutionOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="col-span-12 lg:col-span-2 w-full bg-blue-700/90 hover:bg-blue-300 dark:bg-primary dark:hover:bg-gray-400"
              size="icon"
              disabled={isLoading}
              type="submit"
            >
              Generate
            </Button>
          </form>
        </Form>

        <div className="space-y-4 mt-4">
          {photos.length === 0 && !isLoading && (
            <Empty label="No images generated." />
          )}
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {photos.map((src) => (
              <Card
                className="rounded-lg overflow-hidden dark:bg-sky-800/40  "
                key={src}
              >
                <div className="relative aspect-square">
                  <Image fill alt="generated" src={src} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    onClick={() => window.open(src)}
                    className="w-full bg-blue-300 dark:bg-white"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagepage;
