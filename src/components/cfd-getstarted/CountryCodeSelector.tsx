import React from "react";

export interface CountryCode {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  { code: "KR", dialCode: "+82", name: "Korea", flag: "🇰🇷" },
  { code: "US", dialCode: "+1", name: "USA", flag: "🇺🇸" },
  { code: "PH", dialCode: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "CN", dialCode: "+86", name: "China", flag: "🇨🇳" },
  { code: "JP", dialCode: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "VN", dialCode: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "TH", dialCode: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "MY", dialCode: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "SG", dialCode: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "ID", dialCode: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "IN", dialCode: "+91", name: "India", flag: "🇮🇳" },
  { code: "AU", dialCode: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "GB", dialCode: "+44", name: "UK", flag: "🇬🇧" },
  { code: "DE", dialCode: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "FR", dialCode: "+33", name: "France", flag: "🇫🇷" },
  { code: "CA", dialCode: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "HK", dialCode: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "TW", dialCode: "+886", name: "Taiwan", flag: "🇹🇼" },
];

interface CountryCodeSelectorProps {
  value: string;
  onChange: (dialCode: string) => void;
  disabled?: boolean;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const selectedCountry = COUNTRY_CODES.find((c) => c.dialCode === value) || COUNTRY_CODES[0];

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer min-w-[90px] h-[46px]"
      >
        {COUNTRY_CODES.map((country) => (
          <option key={`${country.code}-${country.dialCode}`} value={country.dialCode}>
            {country.flag} {country.dialCode}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default CountryCodeSelector;
