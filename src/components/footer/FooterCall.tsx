"use client"
import React from 'react'
import { FormattedNumber, IntlProvider } from "react-intl";


function FooterCall() {
  return (
    <div className="w-full p-2">
        <div className="w-11/12 mx-auto border-t border-slate-300 flex flex-wrap justify-between items-center sm:p-4 p-2">
          <div className="flex lg:w-1/2 w-full items-center lg:justify-start justify-center lg:mb-0 mb-4">
            <p className="font-bold">در تمامی سفر‌های شما،</p>
            <p className="text-slate-800 sm:text-base text-sm"> ۲۴ ساعته در کنار شما هستیم.</p>
          </div>
          <div className="flex flex-wrap lg:w-1/2 w-full items-center lg:justify-end justify-center sm:gap-8 gap-4">
            <IntlProvider locale="fa" messages={{}}>
              <div className="flex items-center gap-1">
                <p className="font-bold text-slate-700">تلفن پشتیبانی:</p>
                <span className="text-orange-600 cursor-pointer">
                <FormattedNumber value={21112345} useGrouping={false} />
                </span>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-bold text-slate-700">آدرس ایمیل:</p>
                <span className="text-orange-600 cursor-pointer">
                  example@email.com
                </span>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-bold text-slate-700">کد پستی:</p>
                <span className="text-orange-600 cursor-pointer">
                  <FormattedNumber value={112345} useGrouping={false} />
                </span>
              </div>
            </IntlProvider>
          </div>
        </div>
      </div>
  )
}

export default FooterCall