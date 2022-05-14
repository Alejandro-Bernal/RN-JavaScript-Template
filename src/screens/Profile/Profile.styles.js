import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  profileImage: {
    flex: 1,
    width: "50%",
    height: 200,
    borderRadius: 5000,
    marginTop: 20,
    marginBottom: 20,
  },
  bioText: {
    fontSize: 20,
    textAlign: "justify",
    padding: "5%",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  detailItems: {
    flex: 1,
    margin: 5,
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 30,
    justifyContent: "center",
  },
  // row: {
  //   display: "flex",
  //   width: "100%",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  detailsTitle: {
    fontSize: 50,
    textAlign: "center",
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "red",
    marginBottom: 20,
  },
});
