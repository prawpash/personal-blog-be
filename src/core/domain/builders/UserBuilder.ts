import User from '@core/domain/entities/User';
import UserValidtor from '@core/domain/validators/UserValidator';

export default class UserBuilder {
  private id: number | null;
  private name: string;
  private username: string;
  private email: string;
  private password: string;
  private profilePictureId: number | null;
  private postIds: number[];

  constructor() {
    this.id = null;
    this.name = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.profilePictureId = null;
    this.postIds = [];
  }

  build() {
    UserValidtor.validate(
      this.id,
      this.name,
      this.username,
      this.email,
      this.password,
      this.profilePictureId,
      this.postIds,
    );

    return new User(
      this.id,
      this.name,
      this.username,
      this.email,
      this.password,
      this.profilePictureId,
      this.postIds,
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setProfilePictureId(profilePictureId: number) {
    this.profilePictureId = profilePictureId;
  }

  setPostIds(postIds: number[]) {
    this.postIds = postIds;
  }
}
