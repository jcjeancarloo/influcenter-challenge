type UploadProps = {
  description: string
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Upload = ({ handleUpload, description }: UploadProps) => (
  <label
    htmlFor="jsonFileInput"
    className="bg-[#44a5ff] text-white py-2 px-4 rounded cursor-pointer"
  >
    {description}
    <input
      type="file"
      id="jsonFileInput"
      accept=".json"
      onChange={handleUpload}
      className="hidden"
    />
  </label>
)

export default Upload
