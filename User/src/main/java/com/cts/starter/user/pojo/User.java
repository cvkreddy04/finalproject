package com.cts.starter.user.pojo;

import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;

@Entity

@Table(name="user")

public class User {

 



 @Id
private String username;



private String password;

  private String usertype;

  private String email;

  private long mobile;

  private String confirmed;
  
  private String profileimage;
  
  



  

 

@Override
public String toString() {
	return "User [username=" + username + ", password=" + password + ", usertype=" + usertype + ", email=" + email
			+ ", mobile=" + mobile + ", confirmed=" + confirmed + ", profileimage=" + profileimage + "]";
}

public long getMobile() {
	return mobile;
}

public void setMobile(long mobile) {
	this.mobile = mobile;
}

public String getProfileimage() {
	return profileimage;
}

public void setProfileimage(String profileimage) {
	this.profileimage = profileimage;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getUsertype() {
	return usertype;
}

public void setUsertype(String usertype) {
	this.usertype = usertype;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}


public String getConfirmed() {
	return confirmed;
}

public void setConfirmed(String confirmed) {
	this.confirmed = confirmed;
}







}