import Image from 'next/image'
export default function Propaganda() {
  return (
    <div className="flex h-10 w-full items-center gap-56 px-4">
      <div className="flex gap-5">
        <span className="flex gap-1 font-light ">
          <Image
            src="/svgs/whats.svg"
            alt="ícone whatsapp"
            width={14}
            height={14}
          />
          +55 18 42592-0424
        </span>
        <span className="flex  gap-1 font-light ">
          <Image
            src="/svgs/email.svg"
            alt="ícone email"
            width={17}
            height={17}
          />
          elevatefashion@gmail.com.br
        </span>
      </div>
      <div>
        <h1>
          FRETE GRÁTIS NAS COMPRAS <strong> ACIMA DE R$299,00!</strong>{' '}
        </h1>
      </div>
    </div>
  )
}
