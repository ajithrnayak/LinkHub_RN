import React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.9 20.8l-5.6-5.6a6.096 6.096 0 01-3.8 1.3c-1.817 0-3.354-.63-4.612-1.888C3.63 13.353 3.001 11.816 3 10c0-1.817.63-3.354 1.888-4.612C6.147 4.13 7.684 3.501 9.5 3.5c1.817 0 3.354.63 4.612 1.888C15.37 6.647 15.999 8.184 16 10a6.096 6.096 0 01-1.3 3.8l5.625 5.625a.918.918 0 01.275.675c0 .267-.1.5-.3.7a.948.948 0 01-.7.275.948.948 0 01-.7-.275zm-9.4-6.3c1.25 0 2.313-.438 3.188-1.313S14.001 11.249 14 10c0-1.25-.438-2.313-1.313-3.188S10.749 5.499 9.5 5.5c-1.25 0-2.313.438-3.188 1.313S4.999 8.751 5 10c0 1.25.438 2.313 1.313 3.188S8.251 14.501 9.5 14.5z"
        fill={isDarkMode ? '#CAD7ED' : '#7C7C7C'}
      />
    </Svg>
  );
};

export default SearchIcon;
