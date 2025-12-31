import { geistSans } from "@/src/config/fonts"

interface Props {
    title:string;
    subtitle?:string;
    className?:string;
}

export default function Title ({title, subtitle, className}:Props) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${geistSans.className} antialiased text-2xl font-semibold my-3`}>{title}</h1>
      {subtitle && (
        <h3 className="text-2xl font-semibold mb-10">{subtitle}</h3>
      )}
    </div>
  )
}
