// Loading.js
export default function Loading() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div className="loading-spinner"></div>
      <h1 className="mt-4 font-koho">Loading...</h1>
    </div>
  );
}
