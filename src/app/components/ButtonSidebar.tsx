


export default function ButtonSidebar({ onClick, isOpen } :any) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md block xl:hidden"
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
    );
  }