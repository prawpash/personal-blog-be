export default class User {
  private id: number | null;
  private name: string;
  private username: string;
  private email: string;
  private password: string;
  private profilePictureId: number | null;
  private postIds: number[];
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: number | null,
    name: string,
    username: string,
    email: string,
    password: string,
    profilePictureId: number | null,
    postIds: number[],
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.profilePictureId = profilePictureId;
    this.postIds = postIds;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getProfilePictureId(): number | null {
    return this.profilePictureId;
  }

  setProfilePictureId(profilePictureId: number) {
    this.profilePictureId = profilePictureId;
  }

  getPostIds() {
    return this.postIds;
  }

  setPostIds(postIds: number[]) {
    this.postIds = postIds;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
