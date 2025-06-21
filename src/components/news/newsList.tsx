
import React, { useEffect, useState } from 'react';
import { getDomesticNews } from '../../api/index';
import { 
    Text, 
    View, 
    FlatList, 
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';
import { vp2px, formatTime } from '../../util/index';


interface NewItem {
    id: string,
    ctime: string,
    title: string,
    description: string,
    picUrl: string,
    url: string,
    source: string
}
 
// 国内新闻
export const DomesticNews = (): JSX.Element => {
    // 状态变量为
    const [newsList, setNewsList]  = useState<NewItem[]>([]);
    // 当前的page页
    const [page, setPage] = useState<number>(1);
    // 一页的数量
    const [num, setNum] = useState<number>(10);
    // loading状态
    const [loading, setLoading] = useState<boolean>(false);
    

    // 只要page, num 发生变动，执行副作用
    useEffect(() => {
        getDomesticNews(page, num)
            .then((res: NewItem[]) => {
                setNewsList([...newsList, ...res]);
            }).catch(e => {

            });
    }, [page, num]);

    // 分割线组件
    const ItemSeparator = () => { 
      return <View style={
        {
          height: 1, 
          width: '100%',
          backgroundColor: '#CED0CE',
        }
      }></View>
    }

    const loadMore = () => {
      setPage(page + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={newsList}
            renderItem ={({item, index, separators}) => (
                <View style={styles.newsItem}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.imageBox}>
                       {
                        item.picUrl ? (
                          <Image
                            style ={styles.imageItem}
                            source={{
                              uri: item.picUrl
                            }}
                            resizeMode='stretch'
                          ></Image>
                        ) : (<></>)
                       }
                    </View>
                    <View style={styles.itemDescriptionBox}>
                       <Text>{item.description}</Text>
                       <Text>{item.ctime}</Text>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={loadMore}
            onEndReachedThreshold={0.2}
        > 
        </FlatList>
    </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 12, 
    },
    newsItem: {
        backgroundColor: 'white',
        padding: 20,
    },
    itemTitle: {
        color:'black',
        fontSize: 16,
    },
    imageBox: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: vp2px(200),
      width: vp2px(200)
    },
    imageItem: {
      height: '100%',
      width: '100%'
    },
    itemDescriptionBox: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 8,
    }, 
    itemDescription: {

    },
    itemPublishTime: {

    }
  });
  