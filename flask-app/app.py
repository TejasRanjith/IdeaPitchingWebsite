from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data store (can be replaced with a database)
responses = []

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Collect form data
    name = request.form.get('name')
    email = request.form.get('email')
    feedback = request.form.get('feedback')
    
    # Store the data (in a list for this example)
    responses.append({
        'name': name,
        'email': email,
        'feedback': feedback
    })
    
    # Redirect to a thank you page or the same form
    return redirect(url_for('thank_you'))

@app.route('/thank-you')
def thank_you():
    return "Thank you for your feedback!"

@app.route('/responses')
def view_responses():
    return render_template('responses.html', responses=responses)

if __name__ == '__main__':
    app.run(debug=True)
