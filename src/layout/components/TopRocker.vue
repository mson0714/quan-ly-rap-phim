<template>
  <div class="topbar d-flex align-items-center">
    <nav class="navbar navbar-expand">
      <div class="topbar-logo-header">
        <div class="">
          <img
            src="../../assets/images/logo-icon.png"
            class="logo-icon"
            alt="logo icon"
          />
        </div>
        <div class="">
          <h4 class="logo-text">Group 5 Cinema</h4>
        </div>
      </div>
      <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
      <div class="search-bar flex-grow-1">
        <div class="position-relative search-bar-box">
          <input
            type="text"
            class="form-control search-control"
            placeholder="Tìm Kiếm?"
          />
          <span class="position-absolute top-50 search-show translate-middle-y"
            ><i class="bx bx-search"></i
          ></span>
          <span class="position-absolute top-50 search-close translate-middle-y"
            ><i class="bx bx-x"></i
          ></span>
        </div>
      </div>
      <div class="top-menu ms-auto">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item mobile-search-icon">
            <a class="nav-link" href="#"> <i class="bx bx-search"></i> </a>
          </li>
          <li class="nav-item dropdown dropdown-large">
            <a
              class="nav-link dropdown-toggle dropdown-toggle-nocaret"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bx bx-category"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <div class="row row-cols-3 g-3 p-3">
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-cosmic text-white">
                    <i class="bx bx-group"></i>
                  </div>
                  <div class="app-title">Teams</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-burning text-white">
                    <i class="bx bx-atom"></i>
                  </div>
                  <div class="app-title">Projects</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-lush text-white">
                    <i class="bx bx-shield"></i>
                  </div>
                  <div class="app-title">Tasks</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-kyoto text-dark">
                    <i class="bx bx-notification"></i>
                  </div>
                  <div class="app-title">Feeds</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-blues text-dark">
                    <i class="bx bx-file"></i>
                  </div>
                  <div class="app-title">Files</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-moonlit text-white">
                    <i class="bx bx-filter-alt"></i>
                  </div>
                  <div class="app-title">Alerts</div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-large">
            <a
              class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="alert-count">7</span>
              <i class="bx bx-bell"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a href="javascript:;">
                <div class="msg-header">
                  <p class="msg-header-title">Notifications</p>
                  <p class="msg-header-clear ms-auto">Marks all as read</p>
                </div>
              </a>
              <div class="header-notifications-list">
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-primary text-primary">
                      <i class="bx bx-group"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        New Customers<span class="msg-time float-end"
                          >14 Sec ago</span
                        >
                      </h6>
                      <p class="msg-info">5 new user registered</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-danger text-danger">
                      <i class="bx bx-cart-alt"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        New Orders
                        <span class="msg-time float-end">2 min ago</span>
                      </h6>
                      <p class="msg-info">You have recived new orders</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-success text-success">
                      <i class="bx bx-file"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        24 PDF File<span class="msg-time float-end"
                          >19 min ago</span
                        >
                      </h6>
                      <p class="msg-info">The pdf files generated</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-warning text-warning">
                      <i class="bx bx-send"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Time Response
                        <span class="msg-time float-end">28 min ago</span>
                      </h6>
                      <p class="msg-info">5.1 min avarage time response</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-info text-info">
                      <i class="bx bx-home-circle"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        New Product Approved
                        <span class="msg-time float-end">2 hrs ago</span>
                      </h6>
                      <p class="msg-info">Your new product has approved</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-danger text-danger">
                      <i class="bx bx-message-detail"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        New Comments
                        <span class="msg-time float-end">4 hrs ago</span>
                      </h6>
                      <p class="msg-info">New customer comments recived</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-success text-success">
                      <i class="bx bx-check-square"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Your item is shipped
                        <span class="msg-time float-end">5 hrs ago</span>
                      </h6>
                      <p class="msg-info">Successfully shipped your item</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-primary text-primary">
                      <i class="bx bx-user-pin"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        New 24 authors<span class="msg-time float-end"
                          >1 day ago</span
                        >
                      </h6>
                      <p class="msg-info">24 new authors joined last week</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="notify bg-light-warning text-warning">
                      <i class="bx bx-door-open"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Defense Alerts
                        <span class="msg-time float-end">2 weeks ago</span>
                      </h6>
                      <p class="msg-info">45% less alerts last 4 weeks</p>
                    </div>
                  </div>
                </a>
              </div>
              <a href="javascript:;">
                <div class="text-center msg-footer">View All Notifications</div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-large">
            <a
              class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="alert-count">8</span>
              <i class="bx bx-comment"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a href="javascript:;">
                <div class="msg-header">
                  <p class="msg-header-title">Messages</p>
                  <p class="msg-header-clear ms-auto">Marks all as read</p>
                </div>
              </a>
              <div class="header-message-list">
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-1.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Daisy Anderson
                        <span class="msg-time float-end">5 sec ago</span>
                      </h6>
                      <p class="msg-info">The standard chunk of lorem</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-2.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Althea Cabardo
                        <span class="msg-time float-end">14 sec ago</span>
                      </h6>
                      <p class="msg-info">Many desktop publishing packages</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-3.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Oscar Garner
                        <span class="msg-time float-end">8 min ago</span>
                      </h6>
                      <p class="msg-info">Various versions have evolved over</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-4.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Katherine Pechon
                        <span class="msg-time float-end">15 min ago</span>
                      </h6>
                      <p class="msg-info">
                        Making this the first true generator
                      </p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-5.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Amelia Doe
                        <span class="msg-time float-end">22 min ago</span>
                      </h6>
                      <p class="msg-info">
                        Duis aute irure dolor in reprehenderit
                      </p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-6.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Cristina Jhons
                        <span class="msg-time float-end">2 hrs ago</span>
                      </h6>
                      <p class="msg-info">
                        The passage is attributed to an unknown
                      </p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-7.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        James Caviness
                        <span class="msg-time float-end">4 hrs ago</span>
                      </h6>
                      <p class="msg-info">The point of using Lorem</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-8.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Peter Costanzo
                        <span class="msg-time float-end">6 hrs ago</span>
                      </h6>
                      <p class="msg-info">It was popularised in the 1960s</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-9.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        David Buckley
                        <span class="msg-time float-end">2 hrs ago</span>
                      </h6>
                      <p class="msg-info">Various versions have evolved over</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-10.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Thomas Wheeler
                        <span class="msg-time float-end">2 days ago</span>
                      </h6>
                      <p class="msg-info">If you are going to use a passage</p>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class="user-online">
                      <img
                        src="../../assets/images/avatars/avatar-11.png"
                        class="msg-avatar"
                        alt="user avatar"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="msg-name">
                        Johnny Seitz
                        <span class="msg-time float-end">5 days ago</span>
                      </h6>
                      <p class="msg-info">All the Lorem Ipsum generators</p>
                    </div>
                  </div>
                </a>
              </div>
              <a href="javascript:;">
                <div class="text-center msg-footer">View All Messages</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="user-box dropdown">
        <a
          class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX6+vqPj4////+Li4u5ubn8/PyIiIiFhYWJiYnk5OShoaGnp6fT09Pn5+eRkZHu7u7Z2dn19fXCwsKamprHx8exsbHOzs7X19eurq6/v7+jo6Pe3t6WlpZaNtXmAAAE3UlEQVR4nO2d25aqOhBFsUIRbgqI4AX//zsP0fa0vUfbBoKm4ljzpfvROapIIGSFKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEWamG+P/vn/Owhi5Juu3XZHnp6Lblutm1PT9q5aDKRriVulEqZVBqUSr9pjxh0gyrWOlr273KL05Vh/gyDTkv+jdJIsscEemrNUP9K7oU0W+f6UD1Bz+9rs4xuEOrFSrR/15T7rJwiwjU/y8gF9l3IWoyHxKLAVHxS68AYej1qZDbyRFaIocbaYIjhNHHlajTqygIS2CUqRiquDYqHFAinS0H2S+0WUwijzYThP/KFahjDY8vUWvtIEUkeK5hkkYMz9X83rUoJsQ+pTy2YIrFcJ4ytn8EoZRRCocBEMoostVeFH0LfAUOs4dSK8kpfQ2pbOT4Gp1Et6mvHZr0vEOXPhYQ7vU0TCphRueHAXFj6bsKij95pSrOY9N/xQxktymPLgbJqKfobh3HWhGw0GyIW3d5vuLoeg5f/6j4TdpL9qwczdUoh+DYWhDuhPdpY5PFhdD2dfhboGxdC/ZkMsFZvxMtOH64+9pGnfDjWTBBR7xxT/ku08XqejpcGzTvWub6rXsLnW/EIVfhu7LGNIXMdxnRC16NjRw5FZD2as0F9xuTWU//l7hxmVNeCO/hKaI89dqdAAljBxe4wdxFRp4P7dPpc/2/zNnv5AhFT8X3uBonuE5FMG57/IT4e/VfkDldEU9hFPCyCx+T1XU+6AEzaw4TVH3gQmaZbcpisFV0DDlWkzD3K1Pa8ud0EnbBClotut3NmXUx9B2sd9B2fmZo86DjgVFTOXmr4d+fa4DLuAV4rJ9EF5TOg/fz2ACiBud/rRUiT5vPyF+eIWJ1v3hnGidGMY/566sPione00CR1U21HU9rCs2YWffP+kV8A3fPwQAAIAP7k/1WApJkwpTM/THeFmOfRYJuelhGgo13nYuTaJX3VqCI1W5awDhIUof/K+hzlkZneKY+F7Bmb4uOhXPq3DUv1rQ85t916CaHcrjtegSF51gePDWp1y/o4Q+X5y+p4RjETtPRVxiq6UlnmrovkvPFl9tusS2dTt87SNaInpgh68IBh3eJLhSWxjCcK7h265DX4afP9IsEDa0w1cUaomQkx2+olBLhJwsDT09IrqfEGFt6CkKxY17cNsOb3ujqX2Tobfj+N41mCbeUqVzT56bis+T6t4i6HN/+3va1Gde7z3zhdfd0e4H7jzHb5rN7fg5OzwfUjc3WmGPOvp9NeOW47Iy9P16jXavvf3W/o/+ovyVfeptufsO19Do34IiwmxLnO/1EP8vuQ30sttTJeWIjFcpihE0W/Jf0KhqI0fQbDmZeIz+c9JWxjV4g7lYtlN1LGGz0A+of/jBnOkoJTGMSM1iZdSdzNMhmYbzEiOObkVsZ/sVpv7PDJCdn+wcDfH+UQbIhiByQkzZQc8qpEqSWG5/3sMUlYVOJn5nRieHOpxPzfEoWXcbW0uT8oqHcPS+GH9wVXZ33wT81c18JzCP96F+DfGS5lrvt4d8oy65tTS9bJZOr/k1dc67XV1Foae8Lrv4uamqoS77frfd7nZ9X9ZZ1TQsbEe+E1+Zte+gARJsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJP/AAFSQ7wNy+LTAAAAAElFTkSuQmCC"
            class="user-img"
            alt="user avatar"
          />
          <div class="user-info ps-3">
            <p class="user-name mb-0">Nhóm 5</p>
            <p class="designattion mb-0">Admin</p>
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <router-link to="/profile">
            <li>
              <a class="dropdown-item" href="/profile"
                ><i class="bx bx-user"></i><span>Profile</span></a
              >
            </li>
          </router-link>
          <li>
            <a class="dropdown-item" @click="dangXuat()"
              ><i class="bx bx-log-out-circle"></i><span>Logout</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    dangXuat() {
      axios
        .get("http://127.0.0.1:8000/api/admin/dang-xuat", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          localStorage.removeItem("key_admin");
          localStorage.removeItem("ho_va_ten");
        })
        .catch((err) => {
          const listErr = err.response.data.errors;
          Object.values(listErr).forEach((error) => {
            this.$toast.error(error[0]);
          });
        });
    },
  },
};
</script>
<style></style>
