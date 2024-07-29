export const Input_del = () => {
return (
    <div className="text-center mt-4">
      <input className="px-6 py-2 rounded-s-lg line-through focus:outline-none" type="text" />
      <input className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-e-lg" type="submit" value="Delete" />
    </div>
)
}