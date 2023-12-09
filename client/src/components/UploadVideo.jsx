import {useState} from 'react'
import lighthouse from "@lighthouse-web3/sdk";
const UploadVideo = () => {
    const func = async (url) => {
        console.log(url)
        const uploadResponse = await lighthouse.upload(
            url,
            '3ba4e579.560eb4b7fbd148a89f40e2c4357acfec'
        );

        console.log(uploadResponse);
    }
    const CreateVideo = () => [
        console.log("Created video")
    ]
    const handleTitle = (e) => {
         setTile(e.target.value)
    }
    const Success =()=> (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>
    )
    const Error = () => (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span> Username already taken!
        </p>
    )
    const [title, setTile] = useState("");

    return (
      <>
        <div>
          <form className="max-w-sm mx-auto backdrop-brightness-200 border border-solid  border-r-teal-500 rounded-md p-5 border-b-2">
            <div className='flex flex-row justify-center m-3 font-extrabold text-cyan-800 text-3xl'>Upload the Video</div>
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Your name
              </label>
              <input
                type="text"
                id="username-success"
                value={title}
                onChange={handleTitle}
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Bonnie Green"
              />
              <Success />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Video-URL"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >
                Video URL
              </label>
              <input
                type="file"
                id="ok"
                onChange={(e) => func(e.target.files)}
                // value={url}
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                placeholder="Bonnie Green"
              />
              <Error />
            </div>
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Your name
              </label>
              <input
                type="text"
                id="username-success"
                value={title}
                onChange={handleTitle}
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Bonnie Green"
              />
              <Success />
            </div>
            <div className='flex flex-row justify-center align-middle'>
              <button
                type="submit"
                className="bg-cyan-500 text-teal-50 font-bold p-3 rounded-lg hover:bg-cyan-300"
              >
                Upload Video
              </button>
            </div>
          </form>
        </div>
      </>
    );
}

export default UploadVideo