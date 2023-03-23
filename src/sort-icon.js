import React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SortIcon = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m21.534 16.284-3.75 3.75h-.009c-.01.02-.028.029-.047.047l-.028.019-.037.028-.029.019-.028.019h-.037l-.028.018h-.038l-.037.02h-.432l-.037-.02h-.038l-.028-.018h-.037l-.028-.02-.029-.018-.037-.028-.028-.019-.047-.047h-.01l-3.75-3.75a.759.759 0 0 1 1.07-1.068L16.5 17.69V10.5a.75.75 0 1 1 1.5 0v7.19l2.466-2.474a.759.759 0 0 1 1.068 1.068ZM11.25 11.25H4.5a.75.75 0 1 0 0 1.5h6.75a.75.75 0 1 0 0-1.5ZM4.5 6.75h12.75a.75.75 0 1 0 0-1.5H4.5a.75.75 0 0 0 0 1.5Zm5.25 10.5H4.5a.75.75 0 1 0 0 1.5h5.25a.75.75 0 1 0 0-1.5Z"
        fill={isDarkMode ? '#CAD7ED' : '#7C7C7C'}
      />
    </Svg>
  );
};

export default SortIcon;
