import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Snackbar from "react-native-snackbar";

const PostCard = ({ posts, setPosts }) => {
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedBody, setUpdatedBody] = useState("");

  // Edit post
  const handleEdit = (post) => {
    setEditing(true);
    setCurrentPost(post);
    setUpdatedTitle(post?.title);
    setUpdatedBody(post?.body);
  };

  const handleSaveEdit = () => {
    const updatedPosts = posts.map((post) =>
      post.id === currentPost.id
        ? { ...post, title: updatedTitle, body: updatedBody }
        : post
    );
    setPosts(updatedPosts);
    setEditing(false);
    Snackbar.show({
      text: "Post updated successfully!",
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  // Delete post
  const handleDelete = (id) => {
    Snackbar.show({
      text: "Post deleted successfully!",
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <View>
      {editing ? (
        <View style={styles.editContainer}>
          <Text style={styles.editHeader}>Edit Post</Text>
          <TextInput
            style={styles.input}
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder="Edit title"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            value={updatedBody}
            onChangeText={setUpdatedBody}
            placeholder="Edit body"
            multiline
          />
          <Button title="Save" onPress={handleSaveEdit} />
        </View>
      ) : (
        posts.map((post) => (
          <View style={styles.card} key={post.id}>
            <Text style={styles.title}>Title: {post.title}</Text>
            <Text style={styles.desc}>{post.body}</Text>
            <View style={styles.actionContainer}>
              <FontAwesome5
                name="pen"
                size={16}
                color={"darkblue"}
                onPress={() => handleEdit(post)}
              />
              <FontAwesome5
                name="trash"
                size={16}
                color={"red"}
                onPress={() => handleDelete(post.id)}
              />
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "97%",
    backgroundColor: "lightyellow",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    color: "black",
  },
  desc: {
    marginTop: 10,
    color: "black",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  editHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "black",
  },
  textArea: {
    height: 80,
  },
});

export default PostCard;
