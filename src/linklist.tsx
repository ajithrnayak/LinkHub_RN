import React, {useEffect, useState} from 'react';
import data from '../data/links';
import SearchBar from './searchbar';
import Colors from './colors';

import {
  FlatList,
  Text,
  useColorScheme,
  View,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  Image,
  ImageStyle,
} from 'react-native';

interface Link {
  title: string;
  description: string;
  url: string;
}

interface Props {
  onPressLink: (url: string) => void;
}

function extractDomainName(url: string): string {
  const domainRegex = /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i;
  const match = domainRegex.exec(url);
  return match ? match[1] : '';
}

const LinkList: React.FC<Props> = ({onPressLink}) => {
  const [links, setLinks] = useState([] as Link[]);
  const isDarkMode = useColorScheme() === 'dark';

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
    borderBottomColor: isDarkMode ? Colors.borderDark : Colors.borderLight,
  };

  useEffect(() => {
    setLinks(data as Link[]);
  }, []);

  const renderItem = ({item}: {item: Link}) => {
    const imageUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=24`;
    return (
      <TouchableOpacity
        onPress={() => onPressLink(item.url)}
        style={[$item, themeStyle]}>
        <Text
          style={[
            $title,
            {
              color: isDarkMode
                ? Colors.primaryDarkText
                : Colors.primaryLightText,
            },
          ]}>
          {item.title}
        </Text>
        <Text
          numberOfLines={3}
          style={[
            $description,
            {
              color: isDarkMode
                ? Colors.secondaryDarkText
                : Colors.secondaryLightText,
            },
          ]}>
          {item.description}
        </Text>
        <View style={$link}>
          <Image
            style={$tinyLogo}
            source={{
              uri: imageUrl,
            }}
          />
          <Text
            style={[
              $url,
              {
                color: isDarkMode
                  ? Colors.tertiaryDarkText
                  : Colors.tertiaryLightText,
              },
            ]}>
            {item.url}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={$container}>
      <View style={$searchContainer}>
        <SearchBar
          placeholder="Search by title or link..."
          value={''}
          onChangeText={function (text: string): void {
            console.log(text);
          }}
        />
      </View>
      <FlatList
        style={$items}
        data={links}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default LinkList;

const $container: ViewStyle = {
  flex: 1,
};

const $searchContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 24,
  height: 72,
};

const $items: ViewStyle = {};

const $item: ViewStyle = {
  paddingVertical: 20,
  borderBottomWidth: 1,
  paddingHorizontal: 24,
};

const $title: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
};

const $description: TextStyle = {
  fontSize: 16,
  fontWeight: 'normal',
};

const $url: TextStyle = {
  fontSize: 16,
  fontWeight: 'normal',
};

const $tinyLogo: ImageStyle = {
  height: 24,
  width: 24,
};

const $link: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  marginTop: 20,
};
