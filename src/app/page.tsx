'use client';
import {
  BreadcrumbItem,
  Breadcrumbs,
  NextUIProvider,
  button,
} from '@nextui-org/react';
import { Check } from 'lucide-react';
import { Key, useEffect, useState } from 'react';

export default function Home() {
  const [current, setCurrent] = useState<Key>(1);
  const [keyNumber, setKeyNumber] = useState<number>(1);

  function handleAction(key: Key) {
    setCurrent(key);
    setKeyNumber(Number(key));
  }

  function handleNext() {
    let keynumber = keyNumber + 1;
    setKeyNumber(keynumber);
    setCurrent(keynumber);
  }

  return (
    <NextUIProvider>
      <div className="flex flex-col gap-3 items-center justify-center w-screen h-screen bg-zinc-300">
        <div className=" flex items-center justify-center flex-col gap-4 relative">
          <Breadcrumbs
            size="lg"
            className="font-semibold"
            classNames={{
              list: 'gap-0',
            }}
            onAction={handleAction}
          >
            <BreadcrumbItem
              key="1"
              isCurrent={current == 1}
              separator={
                <div
                  className={`w-24 h-1 ${
                    keyNumber > 1 ? 'bg-green-600' : 'bg-zinc-400'
                  } rounded-full`}
                />
              }
            >
              <div
                className={`w-8 h-8 ${
                  keyNumber > 1 ? 'bg-green-600' : 'bg-zinc-400'
                } rounded-full flex items-center justify-center`}
              >
                {keyNumber > 1 ? (
                  <Check size={20} className="text-green-800" />
                ) : (
                  1
                )}
              </div>
            </BreadcrumbItem>
            <BreadcrumbItem
              key="2"
              isCurrent={current == 2}
              isDisabled={keyNumber < 2}
              separator={
                <div
                  className={`w-24 h-1 ${
                    keyNumber > 2 ? 'bg-green-600' : 'bg-zinc-400'
                  } rounded-full`}
                />
              }
            >
              <div
                className={`w-8 h-8 ${
                  keyNumber > 2 ? 'bg-green-600' : 'bg-zinc-400'
                } rounded-full flex items-center justify-center`}
              >
                {keyNumber > 2 ? (
                  <Check size={20} className="text-green-800" />
                ) : (
                  2
                )}
              </div>
            </BreadcrumbItem>
            <BreadcrumbItem
              key="3"
              isCurrent={current == 3}
              separator={
                <div
                  className={`w-24 h-1 ${
                    keyNumber > 3 ? 'bg-green-600' : 'bg-zinc-400'
                  } rounded-full`}
                />
              }
              isDisabled={keyNumber < 3}
            >
              <div
                className={`w-8 h-8 ${
                  keyNumber > 3 ? 'bg-green-600' : 'bg-zinc-400'
                } rounded-full flex items-center justify-center`}
              >
                {keyNumber > 3 ? (
                  <Check size={20} className="text-green-800" />
                ) : (
                  3
                )}
              </div>
            </BreadcrumbItem>
            <BreadcrumbItem
              key="4"
              isCurrent={current == 4}
              separator={
                <div
                  className={`w-24 h-1 ${
                    keyNumber > 4 ? 'bg-green-600' : 'bg-zinc-400'
                  } rounded-full`}
                />
              }
              isDisabled={keyNumber < 4}
            >
              <div
                className={`w-8 h-8 ${
                  keyNumber > 4 ? 'bg-green-600' : 'bg-zinc-400'
                } rounded-full flex items-center justify-center`}
              >
                {keyNumber > 4 ? (
                  <Check size={20} className="text-green-800" />
                ) : (
                  4
                )}
              </div>
            </BreadcrumbItem>
          </Breadcrumbs>
          <div>
            {current == 4 ? (
              <button
                className="px-5 py-0.5 bg-green-600 hover:bg-green-500 transition-all text-white rounded-md font-semibold"
                onClick={() => setKeyNumber(5)}
              >
                Finish
              </button>
            ) : current == 3 ? (
              <>
                <p className="text-lg text-zinc-700">teste 3</p>
              </>
            ) : current == 2 ? (
              <p className="text-lg text-zinc-700">teste 2</p>
            ) : (
              <>
                <p className="text-lg text-zinc-700">teste 1</p>
              </>
            )}
            {keyNumber < 4 && (
              <button
                className="absolute right-0 px-5 py-0.5 bg-green-600 hover:bg-green-500 transition-all text-white rounded-md font-semibold"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
