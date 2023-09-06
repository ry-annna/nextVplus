"use client";

import { Button, Checkbox, Label, TextInput, FileInput } from "flowbite-react";
import { useEffect } from "react";

const DefaultForm = () => {
  useEffect(() => {
    const form = document.querySelector("demo-form");

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const jsonData = {};

      for (const [key, value] of formData.entries()) {
        jsonData[key] = value;
      }

      try {
        const response = await fetch(
          "https://forms.nicepagesrv.com/Form/Process",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Handle the response data
          console.log(data);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    // form.addEventListener("submit", handleSubmit);
    // form.addEventListener("submit", handleSubmit);

    // return () => {
    //   form.removeEventListener("submit", handleSubmit);
    // };
  }, []);

  return (
    <form
      className="flex flex-col w-full gap-4 px-[20px]"
      source="title"
      name="form"
      id="berita-form"
      redirect="true"
      redirect-address="#"
    >
      <div>
        <div className="block mb-2 ">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput id="title" required type="text" />
      </div>

      <div>
        <div className="block mb-2 ">
          <Label htmlFor="deskripsi" value="Deskripsi" />
        </div>
        <TextInput id="deskripsi" required type="text" />
      </div>

      <div>
        <div className="block mb-2 ">
          <Label htmlFor="sumber" value="Sumber" />
        </div>
        <TextInput id="sumber" required type="text" />
      </div>

      <div className="max-w-md" id="fileUpload">
        <div className="block mb-2">
          <Label htmlFor="file" value="Upload file" />
        </div>
        <FileInput helperText="Pilih file" id="file" />
      </div>

      <div className="u-align-center u-form-group u-form-submit">
        <input
          type="submit"
          value="submit"
          className="px-5 py-3 bg-red-500 rounded-lg"
        />
      </div>
    </form>
  );
};

export default DefaultForm;
