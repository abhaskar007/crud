import React from 'react'
import { useState } from 'react'

export const AddUsers = () => {
    const [user, setUser]= useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
  return (
   <div>
    <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter name" value={name}/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="UserName">Username</label>
    <input type="text" class="form-control" id="UserName" aria-describedby="emailHelp" placeholder="Enter UserName" value={username}/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={email}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="phone" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" placeholder="Phone" value={phone}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="website" class="col-sm-2 col-form-label">website</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="website" placeholder="website" value={website}/>
    </div>
  </div>

 
  <button type="submit" class="btn btn-primary btn-block">Add User</button>
</form>
   </div>
  )
}
