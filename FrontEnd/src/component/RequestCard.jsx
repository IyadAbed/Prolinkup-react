import React, { useState, Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";

export default function RequestCard({
  name,
  description,
  message,
  imageUrl,
  projectId,
  userId,
  status,
  refresh,
  price,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const accept = {
    projectId,
    userId,
  };
  console.log(price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .put(`http://localhost:5000/acceptRequest`, accept)
        .then((res) => {
          console.log(res.data);
          refresh();
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancle = async (event) => {
    event.preventDefault();
    try {
      await axios
        .put(`http://localhost:5000/cancelRequest`, accept)
        .then((res) => {
          console.log(res.data);
          refresh();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {status === "pending" && (
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={imageUrl} alt="img-blur-shadow" layout="fill" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {name}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>You will earn: {price}$</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Fragment>
              <div className="flex justify-between">
              <Button
                className="bg-[#cbefff] text-black hover:bg-[#70ACC7] -100 hover:text-white"
                onClick={handleOpen}
              >
                <span>More detail's</span>
              </Button>
              <Button
                variant="text"
                color="red"
                onClick={handleCancle}
                className="mr-1"
              >
                <span>Cancel Request</span>
              </Button>
              </div>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader style={{ marginBottom: "-120px" }}>
                  {name}
                </DialogHeader>
                <DialogBody
                  divider
                  style={{ marginTop: "30px", border: "none" }}
                >
                  <div>
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800 mt-20">
                      <form className="text-black" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                          <div>
                            <h1 className="text-black dark:text-gray-200 font-bold">
                              Descripton of the project:
                            </h1>
                            <Typography>{description}</Typography>
                          </div>
                          <br />
                          <div>
                            <h1 className="text-black dark:text-gray-200 font-bold">
                              What you will do in this project:
                            </h1>
                            <Typography>{message}</Typography>
                          </div>
                        </div>

                        <div className="flex justify-end mt-6">
                          <DialogFooter>
                            <Button
                              variant="text"
                              color="red"
                              onClick={handleOpen}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>

                            <Button
                              className="bg-[#70ACC7] hover:bg-[#cbefff] -100 hover:text-black"
                              type="submit"
                              onClick={handleOpen}
                            >
                              <span>Accept</span>
                            </Button>
                          </DialogFooter>
                        </div>
                      </form>
                    </section>
                  </div>
                </DialogBody>
              </Dialog>
            </Fragment>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
