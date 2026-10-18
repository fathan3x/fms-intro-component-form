import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";

import desktopBg from "./assets/bg-intro-desktop.png";
import { cn } from "cn";
import { useForm } from "@tanstack/react-form";
import z from "zod";

import iconError from "./assets/icon-error.svg";

export function App() {
  const style = {
    "bg-red-400": "bg-[hsl(0,100%,74%)]",
    "bg-purple-700": "bg-[hsl(248,32%,49%)]",
    "bg-green-400": "bg-[hsl(154,59%,51%)]",
    "text-red-400": "text-[hsl(0,100%,74%)] placeholder:text-[hsl(0,100%,74%)]",
    "outline-purple-700": "outline-[hsl(248,32%,49%)]",
  };

  const formSchema = z.object({
    firstName: z.string().min(1, "First Name cannot be empty"),
    lastName: z.string().min(1, "Last name cannot be empty"),
    email: z.email("Looks like this is not an email"),
    password: z.string().min(1, "Password cannot be ampty"),
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <main className="relative font-['Poppins'] min-h-screen flex items-center justify-center">
      <img
        src={desktopBg}
        className={cn(
          style["bg-red-400"],
          "absolute inset-0 w-full h-full z-1",
        )}
      />
      <section className="z-2 flex flex-col lg:flex-row items-center justify-center max-w-6xl gap-10 text-white p-6">
        <div className="flex-1 shrink-0 lg:p-10 space-y-8">
          <h1 className="text-5xl text-center lg:text-left font-black">
            Learn to code by watching others
          </h1>
          <p className="text-center lg:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="w-full lg:basis-[50%] shrink-0 lg:p-10 space-y-6">
          <div
            className={cn(
              style["bg-purple-700"],
              "p-4 rounded-lg text-center lg:text-left flex items-center justify-center shadow-[0px_8px_0px_0px_rgba(0,0,0,0.2)]",
            )}
          >
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          </div>
          <div className="p-10 bg-white text-black font-black rounded-lg shadow-[0px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              <form.Field
                name="firstName"
                children={(field) => {
                  const isError = field.state.meta.errors.length;
                  return (
                    <div className="relative space-y-2">
                      <input
                        id={field.name}
                        name={field.name}
                        placeholder="First Name"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.currentTarget.value)
                        }
                        className={cn(
                          style["outline-purple-700"],
                          isError
                            ? "border-[hsl(0,100%,74%)] text-[hsl(0,100%,74%)] placeholder:text-[hsl(0,100%,74%)]"
                            : "border-black/15",
                          "border-2 placeholder:text-black/30 placeholder:font-bold py-4 px-6 w-full rounded-md",
                        )}
                      />
                      {isError ? (
                        <>
                          <img
                            src={iconError}
                            className="absolute top-4.5 right-5"
                          />
                          <p
                            className={cn(
                              style["text-red-400"],
                              "text-xs italic font-medium text-right",
                            )}
                          >
                            {field.state.meta.errors[0]?.message}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                }}
              />
              <form.Field
                name="lastName"
                children={(field) => {
                  const isError = field.state.meta.errors.length;
                  return (
                    <div className="relative space-y-2">
                      <input
                        id={field.name}
                        name={field.name}
                        placeholder="Last Name"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.currentTarget.value)
                        }
                        className={cn(
                          style["outline-purple-700"],
                          isError
                            ? "border-[hsl(0,100%,74%)] text-[hsl(0,100%,74%)] placeholder:text-[hsl(0,100%,74%)]"
                            : "border-black/15",
                          "border-2 placeholder:text-black/30 placeholder:font-bold py-4 px-6 w-full rounded-md",
                        )}
                      />
                      {isError ? (
                        <>
                          <img
                            src={iconError}
                            className="absolute top-4.5 right-5"
                          />
                          <p
                            className={cn(
                              style["text-red-400"],
                              "text-xs italic font-medium text-right",
                            )}
                          >
                            {field.state.meta.errors[0]?.message}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                }}
              />
              <form.Field
                name="email"
                children={(field) => {
                  const isError = field.state.meta.errors.length;
                  return (
                    <div className="relative space-y-2">
                      <input
                        type="email"
                        id={field.name}
                        name={field.name}
                        placeholder="Email Address"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.currentTarget.value)
                        }
                        className={cn(
                          style["outline-purple-700"],
                          isError
                            ? "border-[hsl(0,100%,74%)] text-[hsl(0,100%,74%)] placeholder:text-[hsl(0,100%,74%)]"
                            : "border-black/15",
                          "border-2 placeholder:text-black/30 placeholder:font-bold py-4 px-6 w-full rounded-md",
                        )}
                      />
                      {isError ? (
                        <>
                          <img
                            src={iconError}
                            className="absolute top-4.5 right-5"
                          />
                          <p
                            className={cn(
                              style["text-red-400"],
                              "text-xs italic font-medium text-right",
                            )}
                          >
                            {field.state.meta.errors[0]?.message}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                }}
              />
              <form.Field
                name="password"
                children={(field) => {
                  const isError = field.state.meta.errors.length;
                  return (
                    <div className="relative space-y-2">
                      <input
                        id={field.name}
                        name={field.name}
                        type="password"
                        placeholder="Password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.currentTarget.value)
                        }
                        className={cn(
                          style["outline-purple-700"],
                          isError
                            ? "border-[hsl(0,100%,74%)] text-[hsl(0,100%,74%)] placeholder:text-[hsl(0,100%,74%)]"
                            : "border-black/15",
                          "border-2 placeholder:text-black/30 placeholder:font-bold py-4 px-6 w-full rounded-md",
                        )}
                      />
                      {isError ? (
                        <>
                          <img
                            src={iconError}
                            className="absolute top-4.5 right-5"
                          />
                          <p
                            className={cn(
                              style["text-red-400"],
                              "text-xs italic font-medium text-right",
                            )}
                          >
                            {field.state.meta.errors[0]?.message}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                }}
              />
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <>
                    <button
                      disabled={!canSubmit || isSubmitting}
                      type="submit"
                      className={cn(
                        style["bg-green-400"],
                        "p-4 rounded-lg flex items-center font-bold justify-center w-full text-white shadow-[0px_4px_0px_0px_rgba(0,0,0,0.3 )] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                      )}
                    >
                      <p>CLAIM YOUR FREE TRIAL</p>
                    </button>
                    <p className="text-center text-xs text-black/30 font-medium">
                      By clicking the button, you are agreeing to our{" "}
                      <span className={cn(style["text-red-400"])}>
                        Terms and Services
                      </span>
                    </p>
                  </>
                )}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
