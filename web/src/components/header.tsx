import { useState } from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div className=" flex h-16 w-full items-center bg-headerColor">
      <div>
        <a href="home">
          <Image
            src="/svgs/logo.svg"
            alt="logo da loja"
            width={78}
            height={78}
          />
        </a>
      </div>

      <nav>
        <ul className="flex gap-8 text-sm font-light text-zinc-50">
          <li>
            <div className="transition-width relative border-b-2 border-transparent  text-sm text-zinc-50 duration-300 hover:w-full hover:border-b-2 hover:border-zinc-50">
              <button className="flex" id="menu-nova-colecao">
                NOVA COLEÇÃO!{' '}
                <Image
                  src="/svgs/seta.svg"
                  alt="seta para mostrar mais itens"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
          <li>
            <a
              className="transition-width relative cursor-pointer border-b-2 border-transparent  text-sm text-zinc-50 duration-300 hover:w-full hover:border-b-2 hover:border-zinc-50"
              href="#"
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              className="transition-width relative cursor-pointer border-b-2 border-transparent  text-sm text-zinc-50 duration-300 hover:w-full hover:border-b-2 hover:border-zinc-50"
              href="#"
            >
              MAIS VENDIDOS
            </a>
          </li>
          <li>
            <div className="transition-width relative border-b-2 border-transparent  text-sm text-zinc-50 duration-300 hover:w-full hover:border-b-2 hover:border-zinc-50">
              <button className="flex">
                ROUPAS{' '}
                <Image
                  src="/svgs/seta.svg"
                  alt="seta para mostrar mais itens"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
          <li>
            <a
              className="transition-width relative cursor-pointer border-b-2 border-transparent  text-sm text-zinc-50 duration-300 hover:w-full hover:border-b-2 hover:border-zinc-50"
              href="#"
            >
              OUTLET
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
