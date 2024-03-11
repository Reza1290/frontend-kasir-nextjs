import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuButton({ component, children, ...props }: any) {
  const router = usePathname();
  console.log(router == props.href);
  return (
    <Link href={props.href}>
      <div
        className={`flex items-center rounded-lg p-2 my-2 gap-5 ${
          router == props.href ? 'bg-blue-600 text-gray-200' : 'text-gray-600'
        }`}
      >
        <div className='px-2 '>{component}</div>
        <div className='font-medium '>{children}</div>
      </div>
    </Link>
  );
}
