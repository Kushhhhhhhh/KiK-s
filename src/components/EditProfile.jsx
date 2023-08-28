import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from 'react-icons/md'
import { TextInput } from '../components';
import CustomButton from '../components/CustomButton';
import Loading from '../components/Loading';
import { UpdateProfile } from "../redux/userSlice";

const EditProfile = () => {
const { user } = useSelector((state) => state.user);
const dispatch = useDispatch();
const [errMsg, setErrMsg] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [picture, setPicture] = useState(null);
const [file, setFile] = useState(null);
const { 
    register,
    getValues,
    handleSubmit,
    formState: { errors },
} = useForm({
    mode: "onChange",
    defaultValues: {...user},
});

const onSubmit = async (data) => {};
const handleClose = () => {
    dispatch(UpdateProfile(false));
};
const handleSelect = (e) => {
    setPicture(e.target.files[0])
};

  return <>
  <div className="fixed z-50 inset-0 overflow-y-auto ">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
         <div className="fixed inset-0 transition-opacity">
           <div className="absolute inset-0 bg-[#000] opacity-70">

           </div>
         </div>
         <span className="hidden sm:inline-block sm:align-middle sm:h-screen ">
           
         </span>
         &#8203;
         <div className="inline-block align-bottom shadow-xl bg-primary rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
         role="dialog"
         aria-modal="true"
         aria-labelledby="modal-headline"
         >
           <div className="flex justify-between px-6 pt-5 pb-2">
            <label 
            htmlFor="name"
            className="block font-medium text-xl text-ascent-1 text-left"
>
    Edit Profile
</label>

<button className="text-ascent-1" onClick={handleClose}>
    <MdClose size={22} />
</button>
           </div> 
           <form className="px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6" 
           onClick={handleSubmit(onSubmit)}
           >
            <TextInput
              name="firstName" placeholder="First Name"
              label="First Name"
              type="text"
              styles="w-full"
              register={register("firstName", {
              required: "First Name is required"
              })}
              error={errors.firstName ? errors.firstName.message : ""}
              />
               <TextInput
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              type="lastName"
              styles="w-full"
              register={register("lastName", {
              required: "Last Name is required"
              })}
              error={errors.lastName ? errors.lastName.message : ""}
              />
            
               <TextInput
            name="Profession" 
            label="Profession"
            type="text"
            placeholder="Profession"
            register={register("Profession", {
                required: "Profession is required"
                })}
            styles="w-full"
            labelStyle='ml-2'
            error={errors.Profession ? errors.Profession.message : ""}
            />
             <TextInput
            name="Location"
            placeholder="Location"
            label="Location"
            type="Location"
            register={register("password", {
            required: "Location is required"
            })}
            styles="w-full"
            labelStyle='ml-2'
            error={errors.Location ? errors.Location.message : ""}
            />
            <input 
               type='file'
               onChange={(e) => handleSelect(e)}
               id='imgUpload'
               accept='.jpg, .png, .jpeg' 
               />


           {errMsg?.message && (
              <span
              className={`text-sm ${errMsg?.status === "failed"
              ? "text-[#f64949fe]"
              : "text-[#2ba150fe]"
            } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
            <div className="py-5 sm:flex sm:flex-row-reverse border-t border-[#66666645]">
            {
              isSubmitting ? (<Loading />) : (<CustomButton
              type='submit'
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
              title='Submit'
              />
            )}
            </div>
           </form>
         </div>
    </div>
  </div>
  </>
};

export default EditProfile;
