import React from "react";
import { TextField, Button } from "@mui/material";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4">
      <div className="w-full max-w-2xl bg-white">
        <h1 className="text-6xl text-center text-gray-800 mb-6">Contact Us</h1>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Address: </strong>
            Kharar Road, Landran, Mohali, Punjab, India
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Contact No:</strong> (+91)
            8521977355
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Email:</strong>{" "}
            help.srinkha@gmail.com
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex justify-between gap-4">
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              required
              className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <TextField
            label="Phone Number"
            type="tel"
            required
            variant="outlined"
            fullWidth
            className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <TextField
            label="Comment"
            type="text"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-center flex justify-start">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="py-3 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
