import React, { useState } from 'react';
import Input from '../components/Input';

export default function AddExercisePage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Use separate useState hooks for each form field
  const [exerciseName, setExerciseName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [instruction1, setInstruction1] = useState('');
  const [instructions2, setInstruction2] = useState('');
  const [instructions3, setInstruction3] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [author, setauth] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new exercise object with the form data

      // Create a new exercise object with the form data
      const newExercise = {
        'exercise': exerciseName,
        'gh-name': author,
        'image': imageURL,
        'instructions': [
          instruction1,
          instructions2,
          instructions3
        ],
        'videoLink': videoLink,
      };

      // Simulate posting data to the server
      // Replace this with your actual API call

      const response = await fetch('https://gymjunkies-b1094-default-rtdb.firebaseio.com/excersizes.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExercise),
      });


      if (!response.ok) {
        throw new Error('Failed to add exercise.');
      }

      setShowSuccessPopup(true);
      
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Use the same conversion to HTML-friendly format for the name
    const htmlName = name.toLowerCase().replaceAll(' ', '-');
    if (htmlName === "author") {
      setauth(value);
    } else if (htmlName === "excersize-name") {
      setExerciseName(value);
    } else if (htmlName === "step-1") {
      setInstruction1(value);
    } else if (htmlName === "step-2") {
      setInstruction2(value);
    } else if (htmlName === "step-3") {
      setInstruction3(value);
    } else if (htmlName === "img-url") {
      setImageURL(value);
    } else if (htmlName === "youtube-video-url") {
      setVideoLink(value);
    }
  };
  

  const handlePopupOkClick = () => {
    setShowSuccessPopup(false);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mx-auto mt-10 max-w-lg">
        <Input
          label={'Excersize Name'}
          placeholder={'Plank'}
          name="ExersizeName"
          value={exerciseName}
          onChange={handleChange}
          required
        />
        <Input
          label={'Author (Github Username)'}
          placeholder={'Username'}
          name="author"
          value={author}
          onChange={handleChange}
          required
        />
        <Input
          label={'Step 1'}
          placeholder={'Step'}
          name="s1"
          value={instruction1}
          onChange={handleChange}
          required
        />
        <Input
          label={'Step 2'}
          placeholder={'Step'}
          name="s2"
          value={instructions2}
          onChange={handleChange}
          required
        />
        <Input
          label={'Step 3'}
          placeholder={'Step'}
          name="s3"
          value={instructions3}
          onChange={handleChange}
          required
        />
        <Input
          label={'Img Url'}
          placeholder={'https://cdn.example.org/img.png'}
          name="imgu"
          value={imageURL}
          onChange={handleChange}
          required
        />
        <Input
          label={'Youtube Video Url'}
          placeholder={'https://www.youtube.com/watch?v=9ucdvujhjfg'}
          name="videou"
          value={videoLink}
          onChange={handleChange}
          required
        />

        
        <button type="submit" className="inline-block rounded border border-white bg-blue-900 mb-40 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:text-white">
          Add
        </button>
      </form>
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-2xl font-semibold mb-4 text-black">Exercise added successfully!</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              onClick={handlePopupOkClick}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
