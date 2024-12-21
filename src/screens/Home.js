import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import FooterMenu from "../components/Menus/FooterMenu";
import PostCard from "../components/PostCard";
import { PostContext } from "../context/postContext";

const Home = () => {
  const [posts, setPosts, getAllPosts, page] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);

  // Initial data fetch
  useEffect(() => {
    getAllPosts(1); 
  }, [getAllPosts]);

  // Fetch next page
  const fetchMorePosts = () => {
    getAllPosts(page + 1);
  };

  // Refresh the list
  const onRefresh = () => {
    setRefreshing(true);
    getAllPosts(1); // Refresh list from page 1
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard
            posts={[item]} 
            setPosts={setPosts}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={fetchMorePosts} 
        onEndReachedThreshold={0.5} // Trigger when 50% of the list is visible
      />
      <FooterMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});

export default Home;
