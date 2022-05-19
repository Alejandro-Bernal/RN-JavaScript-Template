import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#000",
  },
  listItemText: {},
  listIcon: {},
  button: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 20,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#26abff",
  },
  closeButton: {
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#ed4d4d",
    marginBottom: -20,
    marginTop: 20,
  },
  closeText: {
    color: "#ffffff",
    fontSize: 20,
  },
  submitButton: {
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#4caf50",
    marginTop: 20,
  },
  submitText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
