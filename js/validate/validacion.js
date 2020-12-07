function soloNombres(e){
                 key = e.keyCode || e.which;
                 tecla = String.fromCharCode(key).toLowerCase();
                 letras = "abcdefghijklmnopqrstuvwxyzñ ";
                 especiales = [];

                 tecla_especial = false
                 for(var i in especiales){
                     if(key == especiales[i]){
                  tecla_especial = true;
                  break;
                            } 
                 }
                 
                        if(letras.indexOf(tecla)==-1 && !tecla_especial)
                     return false;
                     }

                     function soloNumeros(e){
        var key = window.Event ? e.which : e.keyCode
        return (key >= 48 && key <= 57)
      }

      function alfaNumerica(e){
                 key = e.keyCode || e.which;
                 tecla = String.fromCharCode(key).toLowerCase();
                 letras = "abcdefghijklmnopqrstuvwxyzñ0123456789 -";
                 especiales = [];

                 tecla_especial = false
                 for(var i in especiales){
                     if(key == especiales[i]){
                  tecla_especial = true;
                  break;
                            } 
                 }
                 
                        if(letras.indexOf(tecla)==-1 && !tecla_especial)
                     return false;
                     }

function soloPrecio(e){
        key = e.keyCode || e.which;
                 tecla = String.fromCharCode(key).toLowerCase();
                 letras = ".0123456789";
                 especiales = [];

                 tecla_especial = false
                 for(var i in especiales){
                     if(key == especiales[i]){
                  tecla_especial = true;
                  break;
                            } 
                 }

                                  
                        if(letras.indexOf(tecla)==-1 && !tecla_especial)
                     return false;
      }

      function soloNumeros(e){
        var key = window.Event ? e.which : e.keyCode
        return (key >= 48 && key <= 57)
      }

      
//Validacion formularios
   $(document).ready(function(){

        $.validator.addMethod("valueNotEquals", function(value, element, arg){
         return arg !== value;
        }, "Value must not equal arg.");

        $("#loginForm").validate({
            rules: {
               txtusuario: {
                    required: true
               },
               txtcontra: {
                    required: true
               },
                
               // txtequipo: {
                   // valueNotEquals: "0"
                //}
            },

                messages: {                      
                "txtusuario": {
                   required: "<div style='font-size: 10px;'>Debe ingresar usuario</div>"
                },
                "txtcontra": {
                   required: "<div style='font-size: 10px;'>Debe ingresar contraseña</div>"
                }
            },

            submitHandler: function(form){
               getLogin();

   }
        });

            $("#frmcontact").validate({
            rules: {
               txtnombre: {
                    required: true,
                    maxlength: 80
               },
               txttelefono: {
                    required: true,
                    number: true,
                    minlength: 6,
                    maxlength: 20
               },
               txtemail: {
                    required: true,
                    email: true,
                    minlength: 6,
                    maxlength: 40
               },
               txtcomentario: {
                    required: true,
                    minlength: 10,
                    maxlength: 120
               }
                
            },

                messages: {                      
                "txtnombre": {
                   required: "<b style='color: #ff0000;font-size: 12px;'>Debe ingresar un nombre</b>",
                   maxlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su nombre no debe contener mas de 80 caracteres</b>"
                },
                "txttelefono": {
                   required: "<b style='color: #ff0000;font-size: 12px;'>Debe ingresar un número de teléfono</b",
                   number: "<b style='color: #ff0000;font-size: 12px;'>Solo se admiten números</b>",
                   minlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su telefono debe contener al menos 6 caracteres</b>",
                   maxlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su telefono no debe contener mas de 20 caracteres</b>"
                },
                "txtemail": {
                   required: "<b style='color: #ff0000;font-size: 12px;'>Debe ingresar una direccíon de correo</b>",
                   email: "<b style='color: #ff0000;font-size: 12px;'>Debe ingresar una direccíon de correo válida</b>",
                   minlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su dirección de correo debe contener al menos 6 caracteres</b>",
                   maxlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su dirección de correo no debe contener mas de 40 caracteres</b>"
                },
                "txtcomentario": {
                   required: "<b style='color: #ff0000;font-size: 12px;'>Debe ingresar un comentario</b>",
                   minlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su comentario debe contener al menos 10 caracteres</b>",
                   maxlength: "<b style='color: #ff0000; font-size: 12px; position: relative; top: -4.5px;'>Su comentario no debe contener mas de 120 caracteres</b>"
                }
            },

            submitHandler: function(form){
              enviaremail();

               }
        });
   });
      $(document).ready(function(){

        $.validator.addMethod("valueNotEquals", function(value, element, arg){
         return arg !== value;
        }, "Value must not equal arg.");
        $('#formrol').validate({
            focusInvalid: false,
            ignore: "",
            rules: {
                txtdescripcion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar la descripción del rol</b>"
                }
            },
            invalidHandler: function(event, validator) {
                //showErrorMessage("Debe ingresar la descripción de su empresa");
            },

            errorPlacement: function(label, element) { // render error placement for each input type   
                $('<span class="error"></span>').insertAfter(element).append(label)
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-success').addClass('has-error');
            },

            highlight: function(element) { // hightlight error inputs
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-success').addClass('has-error');
            },

            unhighlight: function(element) { // revert the change done by hightlight

            },

            success: function(label, element) {
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-error').addClass('has-success');
            },

            submitHandler: function(form) {
                guardar_rol();

            }
        });
        $('#formeditarrol').validate({
            focusInvalid: false,
            ignore: "",
            rules: {
                txtdescripcion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar la descripción del rol</b>"
                }
            },
            invalidHandler: function(event, validator) {
                //showErrorMessage("Debe ingresar la descripción de su empresa");
            },

            errorPlacement: function(label, element) { // render error placement for each input type   
                $('<span class="error"></span>').insertAfter(element).append(label)
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-success').addClass('has-error');
            },

            highlight: function(element) { // hightlight error inputs
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-success').addClass('has-error');
            },

            unhighlight: function(element) { // revert the change done by hightlight

            },

            success: function(label, element) {
                var parent = $(element).parent().parent('.form-group');
                parent.removeClass('has-error').addClass('has-success');
            },

            submitHandler: function(form) {
                editar_rol();

            }
        });
        $('#formusuario').validate({
            rules: {
                txtdocumento: {
                    required: true,
                    number: true
                },
                txtnombre: {
                    required: true
                },
                txtapellido: {
                    required: true
                },
                txtfecha: {
                    required: true
                },
                txttelefono: {
                    required: true,
                    number: true
                },
                txtcorreo: {
                    required: true,
                    email:true
                },
                txtdireccion: {
                    required: true
                },
                txtuser: {
                    required: true
                }
            },
            messages:{
                'txtdocumento':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px;'>Debe ingresar un documento</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px;'>Debe ser solo numeros</b>"
                },
                'txtnombre':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px;'>Debe ingresar un nombre</b>"
                },
                'txtapellido':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un apellido</b>"
                },
                'txtfecha':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar una fecha</b>"
                },
                'txttelefono':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un telefono</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ser solo numeros</b>"
                },
                'txtcorreo':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un correo electronico</b>",
                    email:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>No es un email</b>"
                },
                'txtdireccion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar una direccion</b>"
                },
                'txtuser':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un nombre de usuario</b>"
                }
            },
            submitHandler: function(form) {
                guardar_usuario();

            }
        });
        $('#formeditarusuario').validate({
            rules: {
                txtdocumento: {
                    required: true,
                    number: true
                },
                txtnombre: {
                    required: true
                },
                txtapellido: {
                    required: true
                },
                txtfecha: {
                    required: true
                },
                txttelefono: {
                    required: true,
                    number: true
                },
                txtcorreo: {
                    required: true,
                    email:true
                },
                txtdireccion: {
                    required: true
                },
                txtuser: {
                    required: true
                }
            },
            messages:{
                'txtdocumento':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un documento</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ser solo numeros</b>"
                },
                'txtnombre':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un nombre</b>"
                },
                'txtapellido':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un apellido</b>"
                },
                'txtfecha':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar una fecha</b>"
                },
                'txttelefono':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un telefono</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ser solo numeros</b>"
                },
                'txtcorreo':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un correo electronico</b>",
                    email:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>No es un email</b>"
                },
                'txtdireccion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar una direccion</b>"
                },
                'txtuser':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar un nombre de usuario</b>"
                }
            },
            submitHandler: function(form) {
                editar_usuario();

            }
        });

        $('#formmesa').validate({
            rules: {
                txtdescripcion: {
                    required: true,
                    number: true,
                    max: 300,
                    min: 1
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar su número de mesa</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>La mesa ingresada solo debe contener números</b>",
                    max:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>El valor máximo ingresado debe ser 300</b>",
                    min:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>El valor mínimo ingresado debe ser 1</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos("guardar_mesa", "formmesa", "tb-mesas", "nuevo");
                //alert("Validado");
            }
        });

        $('#formmesaEditar').validate({
            rules: {
                txtdescripcion: {
                    required: true,
                    number: true,
                    max: 300,
                    min: 1
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>Debe ingresar su número de mesa</b>",
                    number:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>La mesa ingresada solo debe contener números</b>",
                    max:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>El valor máximo ingresado debe ser 300</b>",
                    min:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -5px'>El valor mínimo ingresado debe ser 1</b>"
                }
            },
            submitHandler: function(form) {
                editar_datos("editar_mesa", "formmesaEditar", "tb-mesas", "editar");
                //alert("Validado");
            }
        });

        $('#formcategoria').validate({
            rules: {
                txtdescripcion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe ingresar una descripción</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos("guardar_categoria", "formcategoria", "tb-categorias", "nuevo");
                //alert("Validado");
            }
        });

        $('#formcategoriaEditar').validate({
            rules: {
                txtdescripcion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe ingresar una descripción</b>"
                }
            },
            submitHandler: function(form) {
                editar_datos("editar_categoria", "formcategoriaEditar", "tb-categorias", "editar");
                //alert("Validado");
            }
        });

        $('#formcliente').validate({
            rules: {
                txtdescripcion: {
                    required: true
                },
                txtdocumento: {
                    required: true
                },
                txttelefono: {
                    required: true
                },
                txtdireccion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su razón social</b>"
                },
                'txtdocumento':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su documento</b>"
                },
                'txttelefono':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su teléfono</b>"
                },
                'txtdireccion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su dirección</b>"
                }
            },
            submitHandler: function(form) {
                
                guardar_datos("guardar_cliente", "formcliente", "tb-clientes", "nuevo");
                
            }
        });

        $('#formclienteEditar').validate({
            rules: {
                txtdescripcion: {
                    required: true
                },
                txtdocumento: {
                    required: true
                },
                txttelefono: {
                    required: true
                },
                txtdireccion: {
                    required: true
                }
            },
            messages:{
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su razón social</b>"
                },
                'txtdocumento':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su documento</b>"
                },
                'txttelefono':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su teléfono</b>"
                },
                'txtdireccion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su dirección</b>"
                }
            },
            submitHandler: function(form) {
                editar_datos("editar_cliente", "formclienteEditar", "tb-clientes", "editar");
                //alert("Validado");
            }
        });

        $('#formperfil').validate({
            rules: {
                txtnombre: {
                    required: true
                },
                txtapellido: {
                    required: true
                },
                txttelefono: {
                    required: true
                },
                txtcorreo: {
                    required: true
                },
                txtdireccion: {
                    required: true
                }
            },
            messages:{
                'txtnombre':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su nombre</b>"
                },
                'txtapellido':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su apellido</b>"
                },
                'txttelefono':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su teléfono</b>"
                },
                'txtcorreo':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su correo</b>"
                },
                'txtdireccion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su dirección</b>"
                }
            },
            submitHandler: function(form) {                
                alert("Validado");
            }
        });

        jQuery.validator.addMethod("notEqual", function(value, element, param) {
        return this.optional(element) || value != $(param).val();
       }, "This has to be different...");

        $("#formcontra").validate({
        rules: {
            txtcontra: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            txtnueva1: {
                required: true,
                minlength: 6,
                maxlength: 20,
                notEqual: '#idtxtcontra'
            },
            txtnueva2: {
                required: true,
                equalTo: '#idtxtnueva1'
            }
        },

            messages: {
               "txtcontra": {
               required: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su contraseña actual</b>",
               minlength: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña debe contener al menos 6 digitos</b>",
               maxlength: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña no debe contener mas de 20 digitos<bv>"
            },
               "txtnueva1": {
               required: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar una nueva contraseña</b>",
               minlength: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña debe contener al menos 6 digitos</b>",
               notEqual: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña debe ser distinta a la actual</b>",
               maxlength: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña no debe contener mas de 20 digitos<bv>"
            },
               "txtnueva2": {
               required: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe repetir su contraseña</b>",
               equalTo: "<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Su contraseña es distinta de la anterior<bv>"
            }
        },

        submitHandler: function(form){
            
            alert("Validado");

        }

    });

        $('#formproducto').validate({
            rules: {
                txtcodigo: {
                    required: true
                },
                txtdescripcion: {
                    required: true
                },
                txtprecio: {
                    required: true
                },
                txtcategoria: {
                    valueNotEquals: '0'
                },
                txttipo: {
                    valueNotEquals: '0'
                }
            },
            messages:{
                'txtcodigo':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su código</b>"
                },
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su descripción</b>"
                },
                'txtprecio':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su precio</b>"
                },
                'txtcategoria':{
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe seleccionar una categoría</b>"
                },
                'txttipo':{
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe seleccionar un tipo de producto</b>"
                }
            },
            submitHandler: function(form) {                
                guardar_producto();
            }
        });

        $('#formproductoEditar').validate({
            rules: {
                txtcodigo: {
                    required: true
                },
                txtdescripcion: {
                    required: true
                },
                txtprecio: {
                    required: true
                },
                txtcategoria: {
                    valueNotEquals: '0'
                },
                txttipo: {
                    valueNotEquals: '0'
                }
            },
            messages:{
                'txtcodigo':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su código</b>"
                },
                'txtdescripcion':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su descripción</b>"
                },
                'txtprecio':{
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su precio</b>"
                },
                'txtcategoria':{
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe seleccionar una categoría</b>"
                },
                'txttipo':{
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px;'>Debe seleccionar un tipo de producto</b>"
                }
            },
            submitHandler: function(form) {                
                editar_producto();
            }
        });

   });

$('#formregistrous').validate({
            rules: {
                nombreu:{
                    required: true
                },
                contrau: {
                    required: true
                },
                nombred: {
                    required: true
                },
                apellidod: {
                    required: true
                },
                correod: {
                    required: true
                },
                telefonod: {
                    required: true
                },
                called: {
                    required: true
                },
                coloniad: {
                    required: true
                },
                cpd: {
                    required: true
                },
                estadod: {
                    required: true
                },
                rfcd: {
                    required: false
                },
                nfiscald: {
                    required: false
                }
            },
            messages:{
                'nombreu':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar un nombre de usuario</b>"
                },
                'contrau':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar una contraseña</b>"
                },
                'nombred':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su nombre</b>"
                },
                'apellidod':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su apellido</b>"
                },
                'correod':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su correo</b>"
                },
                'telefonod':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su telefono</b>"
                },
                'called':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar la calle</b>"
                },
                'coloniad':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar la colonia</b>"
                },
                'cpd':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar su codigo postal</b>"
                },
                'estadod':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar el estado</b>"
                },
                'rfcd':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar el RFC</b>"
                },
                'nfiscald':{
                    required:"<b style='color: #ed2424; font-size: 10px; position: relative; top: -4.5px;'>Debe ingresar el numero fiscal</b>"
                }
            },
            submitHandler: function(form) {                
                GuardarRegistro();
            }
        });
         $('#formPref').validate({
            rules: {
                txtproducto: {
                    valueNotEquals: '0'
                }
            },
            messages:{
                'txtproducto': {
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe seleccionar un producto</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos1("guardar_preferidos", "formPref", "editar_p1");
                //alert("Validado");
            }
        });

         $('#formFel').validate({
            rules: {
                txtproducto: {
                    valueNotEquals: '0'
                }
            },
            messages:{
                'txtproducto': {
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe seleccionar un producto</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos2("guardar_feliz", "formFel", "editar_p2");
                //alert("Validado");
            }
        });

         $('#formBanner').validate({
            rules: {
                txtbanner: {
                    required: true
                },
                txturl: {
                    required: true,
                    url: true
                }                
            },
            messages:{
                'txtbanner': {
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe seleccionar una imagen</b>"
                },
                'txturl': {
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe insertar una url</b>",
                    url:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe insertar una url</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos3("guardar_banner", "formBanner", "editar_banners");
                //alert("Validado");
            }
        });
         $('#formCategorias').validate({
            rules: {
                txtprincipal: {
                    required: true
                },
                txtcategoria: {
                    valueNotEquals: '0'
                }
            },
            messages:{
                'txtprincipal': {
                    required:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe seleccionar una imagen</b>"
                },
                'txtcategoria': {
                    valueNotEquals:"<b style='color: #b648f4; font-size: 10px; position: relative; top: -4.5px'>Debe seleccionar una categoría</b>"
                }
            },
            submitHandler: function(form) {
                guardar_datos4("guardar_catCons", "formCategorias", "editar_arriba");
                //alert("Validado");
            }
        });


         $('#formProductosCategorias').validate({
            rules: {

            },
            messages:{

            },
            submitHandler: function(form) {
                guardar_productos_categoria();
            }
        });