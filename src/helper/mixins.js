import Swal from 'sweetalert2'

export const onTalkMixin = {
    data() {
      return {
          teslain: 'tes mixin',
          toggleSidebar: true,
      };
    },
    methods: {
      swalAlert(title, text, icon) {
         Swal.fire({
              icon,
              title,
              text,
            })
      alert(title + text + icon)
      },
      curency: (number) => {
        const money = number.toLocaleString('id', { style: 'currency', currency: 'IDR' }).replace(',00', '').replace('Rp', 'Rp.')
        return money
      },
      swalPop(title, text, icon) {
          Swal.fire({
              icon,
              title,
              text,
            })
      },
      swalConfirm(title, text, icon) {
        return new Promise((resolve) => {
          Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        });
      },
      swalLoading (title) {
        Swal.fire({
          title: title,
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading()
          }
        })
      },
      swalLoadingClose () {
        Swal.close()
      },
      linkTo (route) {
          this.$router.push(`/${route}`)
      },
      toDate (date) {
        return  new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
      }
    },
    directives: {
      cursor: function(el, binding) {
        el.style = `cursor:${binding.value.cursor}`
      }
    }
  };