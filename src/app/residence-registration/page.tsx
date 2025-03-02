import { Button, TextField } from "@mui/material";

export default function CreateAd() {
  return (
    <div className="w-full min-h-screen">
      <section className="section">
        <div className="w-full my-4 flex justify-between items-center border-b py-4">
          <p className="lg:text-2xl sm:text-xl text-lg">ثبت اقامتگاه</p>
          <Button className="header-btn" variant="contained">
            پاک سازی فرم
          </Button>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="w-full search lg:w-1/2 flex flex-col items-start justify-center gap-8">
            <TextField
              id="title"
              label="عنوان اقامتگاه"
              variant="standard"
              className="bg-slate-100 lg:w-1/2 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              rows={4}
              label="توضیحات اقامتگاه"
              variant="standard"
              multiline
              className="bg-slate-100 lg:w-1/2 w-full text-lg rounded-md"
            />
            <TextField
              id="title"
              label="مکان"
              variant="standard"
              className="bg-slate-100 lg:w-1/2 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              label="قیمت (هرشب)"
              variant="standard"
              className="bg-slate-100 lg:w-1/2 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              label="قیمت (نفر اضافه)"
              variant="standard"
              className="bg-slate-100 lg:w-1/2 w-full text-lg rounded-md p-1"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center"></div>
        </div>
      </section>
    </div>
  );
}
