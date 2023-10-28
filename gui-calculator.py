# Simple code for a basic calculator using Tkinter
import tkinter as tk

def calculate():
    expression = entry.get()
    try:
        result = str(eval(expression))
        result_label.config(text="Result: " + result)
    except Exception as e:
        result_label.config(text="Error")

app = tk.Tk()
app.title("Calculator")
entry = tk.Entry(app)
calculate_button = tk.Button(app, text="Calculate", command=calculate)
result_label = tk.Label(app, text="Result:")
entry.pack()
calculate_button.pack()
result_label.pack()
app.mainloop()
