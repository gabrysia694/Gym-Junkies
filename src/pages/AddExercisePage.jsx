import React from 'react';
import Input from '../components/Input';
import fs from 'fs';

export default function AddExercisePage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values);
      }}
      className="flex flex-col gap-6 mx-auto mt-10 max-w-lg">
      <Input
        label={'Exercise Name'}
        placeholder={'Bench press'}
        required={true}></Input>
      <Input
        label={'Step 1'}
        placeholder={'Lorem ipsum'}
        required={true}></Input>
      <Input label={'Step 2'} placeholder={'Lorem ipsum'}></Input>
      <Input label={'Step 3'} placeholder={'Lorem ipsum'}></Input>
      <Input
        label={'Youtube Video Link'}
        placeholder={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}></Input>
      <Input
        label={'Example GIF or Image URL'}
        placeholder={
          'https://www.wvnstv.com/wp-content/uploads/sites/76/2023/02/image0-1.gif'
        }></Input>
      <button className="inline-block rounded border border-white bg-blue-900 mb-40 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:text-white">
        Add
      </button>
    </form>
  );
}
