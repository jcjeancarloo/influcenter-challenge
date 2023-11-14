import { FaPlus } from 'react-icons/fa'

type UploadProps = {
  description: string
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Upload = ({ handleUpload, description }: UploadProps) => (
  <label
    htmlFor={`jsonFileInput-${description.split(' ')[1]}`}
    className="bg-emerald-500 hover:bg-emerald-400 transition text-white py-2 px-4 rounded cursor-pointer flex flex-row items-center gap-x-2 text-sm md:text-base"
  >
    <FaPlus className="text-md" />
    {description}
    <input
      type="file"
      id={`jsonFileInput-${description.split(' ')[1]}`}
      accept=".json"
      onChange={handleUpload}
      className="hidden"
    />
  </label>
)

export default Upload
