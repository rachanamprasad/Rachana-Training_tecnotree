from tkinter import *
from tkinter import messagebox
from PIL import Image, ImageTk

def login():
    if usernameEntry.get()=='' or passwordEntry.get()=='':
        messagebox.showerror('Error','Fields cannot be empty')
    elif usernameEntry.get()=='Rachana' and passwordEntry.get()=='123':
        messagebox.showinfo('Success','Welcome')
    else:
        messagebox.showerror('Error','Please enter correct credentials')

window=Tk()

# Get screen width and height
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()

window.geometry(f'{screen_width}x{screen_height}+0+0')
window.resizable(False,False)

# Load background image
background_image = Image.open("C:\\Users\\Mahadra\\Downloads\\Student Management System-20230410T070747Z-001\\Student Management System\\bg1.jpg")
background_image = background_image.resize((screen_width, screen_height), Image.ANTIALIAS)
background_image = ImageTk.PhotoImage(background_image)

bgLabel = Label(window, image=background_image)
bgLabel.place(x=0, y=0)

loginFrame=Frame(window,bg='black')
loginFrame.place(x=screen_width//2-200, y=screen_height//2-100)

logoImage=PhotoImage(file="C:\\Users\\Mahadra\\Downloads\\Student Management System-20230410T070747Z-001\\Student Management System\\logo1.png")

logoLabel=Label(loginFrame,image=logoImage)
logoLabel.grid(row=0,column=0,columnspan=2,pady=10)

usernameImage=PhotoImage(file="C:\\Users\\Mahadra\\Downloads\\Student Management System-20230410T070747Z-001\\Student Management System\\user.png")
usernameLabel=Label(loginFrame,image=usernameImage,text='Username',compound=LEFT,font=('times new roman',20,'bold'),bg='white')
usernameLabel.grid(row=1,column=0,pady=10,padx=20)

usernameEntry=Entry(loginFrame,font=('times new roman',20,'bold'),bd=5,fg='royalblue')
usernameEntry.grid(row=1,column=1,pady=10,padx=20)

passwordImage=PhotoImage(file="C:\\Users\\Mahadra\\Downloads\\Student Management System-20230410T070747Z-001\\Student Management System\\password.png")
passwordLabel=Label(loginFrame,image=passwordImage,text='Password',compound=LEFT,font=('times new roman',20,'bold'),bg='white')
passwordLabel.grid(row=2,column=0,pady=10,padx=20)

passwordEntry=Entry(loginFrame,font=('times new roman',20,'bold'),bd=5,fg='royalblue')
passwordEntry.grid(row=2,column=1,pady=10,padx=20)

loginButton=Button(loginFrame,text='Login',font=('times new roman',14,'bold'),width=15,fg='white',bg='cornflowerblue',activebackground='cornflowerblue',activeforeground='white',cursor='hand2',command=login)
loginButton.grid(row=3,column=1,pady=10)

window.mainloop()
