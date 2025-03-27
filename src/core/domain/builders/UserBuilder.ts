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
  private createdAt: Date;
  private updatedAt: Date;

  constructor() {
    this.id = null;
    this.name = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.profilePictureId = null;
    this.postIds = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
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
      this.createdAt,
      this.updatedAt,
    );
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setUsername(username: string) {
    this.username = username;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setPassword(password: string) {
    this.password = password;
    return this;
  }

  setProfilePictureId(profilePictureId: number) {
    this.profilePictureId = profilePictureId;
    return this;
  }

  setPostIds(postIds: number[]) {
    this.postIds = postIds;
    return this;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}
