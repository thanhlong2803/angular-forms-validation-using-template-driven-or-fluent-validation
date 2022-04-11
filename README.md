# Angular forms validation using template-driven  or fluent valdation
-   Now, We are build project structure:

![enter image description here](https://lh3.googleusercontent.com/a56EloDrHW-r8HKYIAO92m2HM1yCSroeODPCtthKLaQLEdZKejAIOv3sw5W-pVJaSX1l3oV1aAFRDTnsFLz83eGBtt7DneODKFP04hMTOuhblH6BB2_qdH9oMRiSsgrVhc4GKQfh7DE4USjMQIPlDR6xhIFca8oE93os107X5g6IFufsIHP-Jtt8T1jDu9m-wEaDZu14dQ4R_SrN5rM9h3p82pSm9gJncEQ3gS4hoY6XKEXKW8x7NcGIE6QHTjHg1FMgY-zl9zja3qFStRnKqIG5jXhMBx9zh81ZERcDLJtW0PM-OSeaodDz4FadCmWQCIZCJyvx6X0xtDZ_CYhEeDRbhU39a44xyYbMV1k0k3uzC6AliSfQ81AI_9GKNxRCydSTqjy5tkOv-ZjNezqHqDULmsZZMd9r1glsRULjw-2RjrgufGy4hdDLuQmx9ebIicWZDVFI6F5e044K9QZjd4TTrLnp0pL1lAJn4EhZCPDWoEqAX0OkZy__qnFHfzppOQZ9cHd61_UKwiPNv4LpK6joMH5KmQGZbOPr6mb0wDJn1Wl9j1dpknj2rIo8-FLcFr0G-e-chCowl9YtBGKKTQT6ZQoAA5jA9aSTBYLryP59UOqVzgZ98PTrEQaf1X20IRZr8ehBY3e19G3Ee_Ka_62IRGxVG-I-j3D__PgRLoZIG9MaWS_lIXymxl5h5E7vGMEsTPwLC0TS6Uavn7oQuWNMp4yzIXE2lwJYAOS3TXGXSj6v_xjBPuThMy2_wg=w220-h384-no?authuser=0)


**Angular forms validation using template-driven or fluent valdation.**

![enter image description here](https://lh3.googleusercontent.com/dKq3xBO8EBliu7uIVTg2uLJGF2e5Lg-vCmXh89i71xSA7B4R_YMt974pIzGurG4OcBfjfYQei-s5xNiVmwXDt8VIBe7NASK382XckTL6nArml7gEPcAUoA0peww40-WgZWHB_HZGqU8bW8fA5QIrxIjI2caU5RXbxNoQ2zvdWLBeRh1j1NMHNz_gWa2bRdS_sl833QpizrqDcnEvY49zaNiC7Owa19l33YvBW8E0h_sVd9FgOIO7lEr1R4-6lDSSNZOjEEgPZFpWIsZwr8khF44cR-4stEbdEpc4T6G1Hg8ie-oCKk_Yz2NY2aN93U9zxAprnvbyGV6MXjJgq6H5RHvi1nVcKI0uaEkxlx79Rbz9yZfevgenosDhPv2GdiTXfBuP5XR80GojVVkMWj0UC8TwYuait1MXf0Xw7WZwPxhTQXTP8KoEVDhC7_GS4xXHCkhOxUa8o1KxN4w9P4v_wRuhHwIvKPoeZzF65RBODT7Lr0rF5B4QlXeXk1__pzyt37EKxhsKOYZHg17uZIrfK5faCMFlB25gp-FdbkUMMbtURWTlZiHxqZcDJuMPC234D0dXxWPR1u4FjXZF7blswgrj-UDIvov1Sr9B0H8jYxL1pVYRKbIH-o2ZUXaFbj0Y94ZeBDPHKk2DKzyqAF9EFVqyIxY5wfFI36sTqTXjlLVuNDamyIoxhJn6rGdx53blyAF_00qhda5vqpthQD_cyiC-RLbGG_4Isty6zxG6sji70mdwex9tIWIFUggMqw=w832-h384-no?authuser=0)

**Forms validation using template-driven** 

How to set up form validation in angular using Template-Driven. The registration form contains definitions of the field and types: first name, last name, email, password, confirm password. 

**I can build the description error for the fields below for me:**
 - The first name is required.
 - The last name is required
 - The email is required and must be a valid email address.
 - The password is required and must have a min length of 6.
 - The confirm password is custom validation and directive called  **MustMatch() method** which is used to validation that the confirm password show the same the password

![enter image description here](https://lh3.googleusercontent.com/RielN4JL3zVYA9SmqzXBVkIrnjG0GXNQUBzL1I34_eKfFVwd7yf3NCGfoG3fl4Pab-HrmYsUXYXmmWqMS8a6KSzx6bbNdLhP2LynixbNg5ApZkXoRCdTQVehoKXBNbItPfWybApdukYdTP_HCSAGy5DOaUuuXW_E-rHMes1iiZ7UqC8B9KhB395rxly2DgQg5xUPfBk_v18JKE_axSaS7lbQy9t1O6xJTNLH1gHHZqN9cDzMmPQsGCKk8CZxcznpkxOTEYGl8OOvXV38pZOjAm-xICbC8uhfRLXZhY_N87Ork-HSoAkQDYgqMhP3WV0fPxAhnkNLV378mA3xeC9nPxnDTyVnDBL8e73WIf7zvBdF5bf2bbsPMUxicjpQC7AZgDBJcrm1VIx8SpoNWJoMqu-zWffpLcpaph8E073JT25wP1YU46_iawI-Xw-nxni8WHi3jDkG8Q2wATPcMavWRAruVMxnn5tgg6rmlywhXvFHzDccSrVrALwQKrGsQGY8Ap4NjGYmoTQpeLa1hUXV_fypMBpYYLD2F3CNx0PBRWIP71o2PBoFuh8nsgElBmwP8frDRKETL-s7aPR769EYW2TZ5VISvxwC6HKetVp4FChWvRkG8VmfwXYU_U6zYbRdoehKod8wOnIRF5hOf-B6WnmoPLdvXYrp56dU1zQBIAzRP2VtWeVEChI4IcZLt-7X6KSQzUHXv4ptdrX7icgR9nkSbME_7pnLt1ZVB_25snCP4yHIdBIVqQ4wsV4oiQ=w836-h384-no?authuser=0)
![enter image description here](https://lh3.googleusercontent.com/HrZC2kNWAm1Q9tkFlwg03tryvFPe54OoDAzZPWgven02CwiQTayTFD0b7id_B2yXiD9SjXhJSm-CMd49zHN_sLQYt5f-SLyGNQ9Vc39FZL5RsHdPaWPICilMQK0nK0EW2xTBxgToIicjJ1ZSE_lzEgZhv7XNgT1Rg3xyjkwM7sB6T_tqgfvJfj4x598ARoBbHUecbSUUjubGlwP0TsydPrna6ybvQoRtyELApakVck3HQWYz-_rlRA7gTwAavnxt1KTq_boqcJcm3filwajehKnldSuxqIjmw-4EjzkYuVbWlIHxjuG8xbxpgsO6KL8-JDLoPockF0u7djba2cAGRr_CnEN_dUzZMbXXn9etveZbr-3S5chRia22kB-JTIAqSwc0OS8yjAzkdIB3L104s9uRqKpvs6JBu8KkkDrb4IcYRP41KVu70KLxBRvtcXJo8Z2eaOGhoJUez4Ga7FVR-VyOoz5oM6YsiQY1gepEua0fmEhbDE8NvGsQOytiFUelFtPVQQ2TpZPhl1JyzJvNSxaMM0O5noIiYpIWz_CqpkqPZCLdySC0jOc_31RAJNOYvvBomxcOV-fcVyct_5M2RT51JKuNCx3vzgAa-qsILnIeRgdDTE2coKURF2S0_HAfAU5hUo2hSAZdM33d0lNv95UOMdJedl6FO_3s-ULB59QDbVtkkIUQK9Cfs6z93qvoR7YwVJZEL3mZXZsybjmJmmeyAr12xfQIunmw6baeJBgdXqN_bDv8vq325RETbQ=w756-h384-no?authuser=0)

This is implemented using the **f.submit** property of the **#f="ngForm"**  template variable which is true after the form is submitted for the first time.

## Template-Driven Forms Validation FormValidationComponent()

The FormValidationComponent() doesn't need much since the form **fields** and **validators** are defined in angular template-driven forms. The angular template-driven defined a model object which is bound to the form fields in the template to give you access to the data entered into the form.
![enter image description here](https://lh3.googleusercontent.com/VtIyyTH50swMl6d04Tyvxs-Xj9ZeTGcrTANmjPeymDkQdaREkO5Sr2E1vmTD-viW4qwSYyAQ7Fd_RAhrTHJG1KInSS6yBwAKA8gUMYcoFg1Agq2DL0XYZV2i_mq1YrJHkE7T76fNjOPSzuSW4E4MZMd7VwJiN5yS_FtMCuAOr3MXi3hL7Y4O3oGK3i7ZfhuTz_LEl2nUU_sU4_-65qCuHP9usr2pTwIUZbowL1jVHWn29A61olaqEZ6bsWWjkAvFo7Kb5nLLg4h3Klza1YtuTB47TK1yCfrbrhmuFbQZXXAsx9ufwaasORXI6PMxY61wY6Oo3-bqJOjGnLKV-EESnA4UAaACvIlhunpl6sAzMGeNuDOyKl59kgks2TajzGTFsbNbOOoto8isSHKD1dMQ9G7RHAinICbeXWpKwk3LfXQtyBMfqydg5SzSgaq0SVEgkryoQgvw8Ud1oxIT2gwLF-xgZRRV64JgdVfg979iwIhc2wIUcijafjVtf2_1dItbxJRFKbX8dbwMKbwJuTRa5mk3FJ_5MGggzQCSc38DOv7CwavcHWJmYR-r1X2o1LYA4fdgZ9-Zzp2ZrVpzFTg2S1Gmv4umgpm_ymU2CEODYjB2oOieyRVNdeAdxjGyFtCiIAUKcJxEHkhbZKp2ed1mx4e44W8txNHdd9K4kYSu-DkTpDCzd_R3vLI-w-WGFP-xtSIa40Gv29yQ-Jwl6bTUCuuvyw4nn5VQbzzlcKYsmmj1Lq1mNZDB1UTLkkgeWg=w692-h384-no?authuser=0)

**What** is template-driven form validaton ? **How** does  Template-Driven Forms Validation in FormValidationComponent work and **use it**? 

**The template-driven** form validation contains in all the html for displaying when we  submited in your browser. The form input fields use the **[(ngModel)]** directive to bind to properties of the model object in the component.

 **We are implemented using** the attribute such as : required , minlength, email, maxlength ,........,etc. The angular framework contains directives The match these attributes with **built-in validator** functions.
 
The forms bind data when we have submitted after that its event to the **onSubmit()** event handler  in the component using the angular event binding **(ngSubmit)='onSubmit'.** The validation message is displayed only after the user attempts to submit the form the first time.

## Template-Driven Forms Custom "Must Match" Validator

The custom **MustMatch()** validator is used that both of the password and confirm password are matching.

![enter image description here](https://lh3.googleusercontent.com/DYaOp9ZZev8Mx-iqU0ZRr0AeikaU5WSH7zRjlerw85B88thxHcAPnwngvhWmgN_MoO7_IjtYeyoXq4Ny4aM7BayggbGhpar4JO6KAUF_NT9LS59EPs0qshOGm_uIdSYQNYl-obN0OMpS7RwNNrbXsah7ax03b43D_5da6XDmEp7VhB9VfJvbcYLsYQztxlf3YpIb_BToKE1HrpNYuAZpRXcVkOiGz6PLAZOJgygQa-OTStPdkRscipLTzCZIW1Q0bA9JoXSF13JeeTxV2J1nllQDLjxJa0SzCML0Jp_TockCnkKbWdBgFsbSZe5zNqWtchvKyHBX651x82VHBW_1NOVzljI6ghgvh4RuT1kuFaD8ri-fcf7oYZHXHwdsYR-rNJxCLTyHqVgjio8nMoS6D-R8mDIaH0FaHE5v47OcjkltRNvBOE7vh1Id6oo52ZxcTHWJXge2_mrKk66wpkJ81jpSXRUMchwYR4_84OiqHX1qzqdxRV6r7lqyrF0Pq0kihA50rvYcjRvF64pOjjVsOa955AwaJmhY2XKXRMyowqc_2QDHIw5_tFBuL-SE8F0wtywcLkXPT_tMbooGxdMGZ4UVK8h3KlgrY0fsh-Vw54FAshpGR4sGXdjgbYN0yg-EJ67dxp1IxzjCOyn28y9GYZhFrVHZmoj8m5yRiHBTojqF9-CcRrUQp-4q0yERxyY572atnDKz-RboMtDhEzCtVSDtbhlNf_fTJfRvFtlYXxfSdCTCrZaeagTDgrPbHg=w598-h384-no?authuser=0)

## Template-Driven Forms Custom "Must Match" Directive


![enter image description here](https://lh3.googleusercontent.com/m00Y_TuSgn_cGZLy_-IYepXU0lbgeoiOQk2rJFu-w6GdvE5LGN1qIP62T4yAZfdYG7i_DtR0pvqWalM4HXwcoBszclnc4Kavb2-psTjsj_5LPVL13UJQQX13u00fevTjDdwGmgY0l7NS-LiQENTJLIZb713ksdxnFyUS98cfEMQWSKLM_8NnVq3RXL1HNFWbwfEz4VTdc0pr8eg7J03kx4RkvPVsxTpMhL-ujsepFe5P0F95C_5IJYpINv4DzyrTq_JCNKQvnH7Mw3Qods1zcr7UoBj2sXemtMRh5VCzSK_OWnauIsmdgGd9ShGFk-j3VzXsM3uu2jYWbsjHa2-ujvU7Co4Cp6d-enRgTR9q31OpewxaGrmN2k1EoaqBHxmxMiuI7woedr0bwJstJs5QTw4GZh2uEvZiKCga8YRGYE_LNItvqZZu4X_Ti8urV444hXl8NXwZSbdo5EpXTa1sb_yJhaAh3UZ49kEW7TnJqfXyzgUEhtOaoFEsusP_z7yEgIlTEVo0Kinj28dwgpB46blE_mCfBBJLbI2ID8XXfsu2oU10jFGa1nhTpIEtK-z4n7dg4BiQA-e37Uexkgk3cP9C0OpUwW7WqePyartOScIB5BWhyYuAcvr9U85Lv020uZBJ9zQvTo2t8jiWAkBg_5cjY00Prq-RYc3hpo6xvCegUoRbO5P1nt7_ypwD0AeT23wh3R4an0X6CSFr8zaj2QJXaWVviw_TSLi3sbiF-U62UKJoLxrDwcUVGa6CcA=w630-h384-no?authuser=0)

The custom [MustMatch] validator so we can attach it to form. A custom validator directive is required when using template-dirven forms because we don't have direct access to the **FormGroup** like in reactive forms

The directive implements the validator interface and **NG_VALIDATORS** prodiver to let angular know that its a custom validator directive.
**[mustMatch]="['field1', 'field2']"** will validate the that field1 and field2 contains the same value,  otherwise a validaton error will be set on field2.




